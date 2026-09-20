---
course_title: Text Encoding Initiative (TEI)
course_id: text-encoding-initiative-tei
provider: Cohortia
original_reference: University of London / Coursera
platform: Cohortia
level: Intermediate
type: Course
duration: ~4 wks
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Arts & Humanities
subcategory: Digital Humanities (11)
skills: XML, markup, scholarly editing, standards
source_catalog: docs/arts-humanities/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds this content and does not claim sole ownership of third-party source material.
---

## Course Overview

The Text Encoding Initiative (TEI) is a cornerstone of digital humanities, providing a robust and flexible framework for representing texts in a machine-readable format. This intermediate-level course dives deep into the principles and practices of TEI, equipping learners with the essential skills to create, validate, and manage complex digital scholarly editions. Far beyond simple digitization, TEI enables scholars to capture the nuanced structure, content, and interpretive layers of textual materials, making them amenable to advanced computational analysis, sophisticated presentation, and long-term preservation. This course is designed for researchers, librarians, archivists, and anyone interested in the meticulous and thoughtful representation of cultural heritage texts in the digital realm.

Throughout this course, we will explore the theoretical underpinnings of text encoding, understanding the critical decisions and interpretive acts inherent in transforming a physical text into a structured digital object. We will begin with a thorough grounding in XML, the foundational language of TEI, before progressively moving into the specific elements and attributes that allow for the detailed markup of various textual features—from basic structural components like paragraphs and headings to complex phenomena such as manuscript hands, editorial interventions, and variant readings. The emphasis will be on practical application, with numerous examples drawn from historical documents, literary works, and scholarly editions.

By the end of this course, you will not only be proficient in using the TEI P5 guidelines but also understand the broader ecosystem of digital scholarly editing. We will discuss best practices for project planning, schema customization, validation, and the various methods for transforming and publishing TEI-encoded texts. This knowledge will empower you to contribute meaningfully to digital humanities projects, preserve cultural heritage with scholarly rigor, and unlock new avenues for research and pedagogy through the power of structured data. Join us to master TEI and become a more effective and critical participant in the evolving landscape of digital scholarship.

Upon successful completion of this course, you will be able to:
*   Understand the historical context and theoretical principles guiding the Text Encoding Initiative (TEI).
*   Master the fundamental syntax and structure of XML as the basis for TEI encoding.
*   Apply core TEI elements and attributes to accurately encode a wide range of textual features, including structural, descriptive, and interpretive markup.
*   Represent complex textual phenomena such as corrections, deletions, additions, and variant readings using advanced TEI constructs.
*   Customize TEI schemas (e.g., using ODD) to meet the specific requirements of diverse scholarly projects.
*   Utilize validation tools to ensure the well-formedness and validity of TEI documents against a schema.
*   Evaluate and select appropriate methods for transforming and publishing TEI-encoded texts for various audiences and platforms.
*   Critically assess the interpretive choices involved in text encoding and their impact on scholarly representation.
*   Engage with the TEI community and understand the ongoing development and governance of the TEI standard.
*   Design and initiate a small-scale TEI encoding project, from conceptualization to initial markup.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Digital Scholarly Editing and TEI | 4 |
| 2 | XML Fundamentals for TEI | 5 |
| 3 | Core TEI Structure: The `teiHeader` and Basic Text Elements | 5 |
| 4 | Encoding Common Textual Features | 6 |
| 5 | Representing Complex Textual Phenomena | 6 |
| 6 | Customizing TEI: ODD and Project-Specific Schemas | 7 |
| 7 | TEI for Specific Document Types and Advanced Markup | 6 |
| 8 | Validation, Transformation, and Publication of TEI Editions | 8 |

Total chapters: 47
---

## Module 1: Foundations of Digital Scholarly Editing and TEI
**Module Goal:** To introduce learners to the core principles of digital scholarly editing, the historical context of text encoding, and the fundamental concepts of the Text Encoding Initiative (TEI) as a standard for representing textual data.

---

### Chapter 1.1 — The Evolution of Scholarly Editing: From Print to Digital

#### Learning objectives
*   Articulate the historical trajectory of scholarly editing, distinguishing between traditional print-based methodologies and emerging digital approaches.
*   Identify the inherent limitations of print-centric scholarly editions in representing textual complexity and variation.
*   Explain the conceptual shift from fixed print editions to dynamic, multi-faceted digital scholarly editions (DSEs).
*   Recognize the foundational reasons for the digital turn in humanities scholarship, particularly for textual studies.

#### Detailed lesson content
For centuries, the scholarly edition has served as the bedrock of textual criticism and literary study. Traditionally, the creation of a critical edition involved meticulous collation of multiple manuscript or print witnesses of a text, the identification of variants, and the establishment of a "copy-text" or "critical text" that the editor believed best represented the author's intention or the most authoritative version. Think of Karl Lachmann's stemmatic method in the 19th century, which sought to reconstruct a lost archetype by mapping genealogical relationships between witnesses, or W.W. Greg's "copy-text" theory, which advocated for choosing a single authoritative manuscript for accidentals (spelling, punctuation) and eclectically incorporating substantives (word choices) from other sources. These methods, while rigorous and foundational, were inherently constrained by the medium of print. A printed critical edition, no matter how comprehensive, is a fixed object: it presents a single, linear reading text, often relegating the rich tapestry of textual variation to a dense and often difficult-to-navigate critical apparatus at the bottom of the page or at the back of the book. This apparatus, while vital, forces readers to constantly flip back and forth, mentally reconstructing the textual landscape.

The limitations of print become particularly acute when dealing with texts that exhibit significant variation, such as medieval manuscripts, Renaissance plays with multiple quarto and folio editions, or modern works with extensive authorial revisions. The concept of a "variorum" edition, which attempts to present all significant variants from all known witnesses, perfectly illustrates this challenge. In print, a true variorum is often unwieldy, prohibitively expensive to produce, and cumbersome to use, often requiring multiple volumes and a highly specialized reader to decipher its complex notation. The very act of choosing a "reading text" in print implicitly privileges one version over others, often obscuring the dynamic, evolving nature of textual transmission and reception. Furthermore, the physical nature of print limits accessibility, searchability, and the ability to link texts to external resources like dictionaries, historical maps, or biographical information. A print edition, once published, is also static; *, *meaning*, and *context* of the text in a machine-readable format, which is where markup languages become indispensable.

#### Key concepts
*   **Critical Edition:** A scholarly edition of a text that attempts to establish the most accurate or authoritative version based on a critical examination of all available textual witnesses.
*   **Variorum Edition:** An edition that presents all significant variant readings from all known textual witnesses, often in a complex apparatus.
*   **Stemmatics (Lachmann Method):** A method of textual criticism that reconstructs the genealogical relationships between manuscripts to determine the most likely original text.
*   **Copy-Text Editing (Greg-Bowers Method):** A method that selects a single authoritative manuscript (the copy-text) for its accidentals (spelling, punctuation) and eclectically incorporates substantive readings from other witnesses.
*   **Digital Surrogate:** A digital copy (e.g., a scan or photograph) of a physical document, which replicates its appearance but does not necessarily encode its structure or content for machine processing.
*   **Digital Scholarly Edition (DSE):** A scholarly edition that leverages digital technologies to present, analyze, and disseminate textual materials, often offering dynamic views, searchability, and rich interconnections.

#### Hands-on activity
Imagine you are a scholar working on a medieval manuscript of Chaucer's *Canterbury Tales*, known for its significant textual variations across different copies. You have access to both a traditional print critical edition (with a dense critical apparatus) and a conceptual design for a digital scholarly edition.

**Task:** Write a short comparative analysis (250-300 words) discussing how your research process and the insights you could gain would differ fundamentally between using the print edition versus the digital edition. Focus on specific tasks like comparing variants, searching for specific phrases, or understanding the scribe's emendations.

**Starter Material:**
*   **Print Edition Scenario:** You have a two-volume print edition. Volume 1 contains the edited reading text. Volume 2 contains the critical apparatus, listing variants by manuscript siglum and line number.
*   **Digital Edition Scenario:** You envision a DSE where you can select any two manuscripts for side-by-side comparison, highlight all instances of a specific word across all witnesses, and click on a variant to see a facsimile of the original manuscript page.

#### Assessment idea
1.  **Question:** Describe two distinct limitations of traditional print scholarly editions when dealing with texts that have multiple significant variants (e.g., Shakespeare's plays or medieval manuscripts). How does a digital scholarly edition (DSE) conceptually overcome each of these limitations?
    *   **Model Response:**
        *   **Limitation 1: Fixed Reading Text and Cumbersome Apparatus.** Print editions typically present a single "reading text," relegating textual variants to a critical apparatus that is often difficult to navigate. This forces the reader to mentally reconstruct the textual history, making it challenging to grasp the full scope of variation. A DSE overcomes this by allowing for multiple, dynamic views of the text. Users can switch between different manuscript witnesses, view diplomatic transcriptions alongside edited texts, or compare variants side-by-side, making the textual fluidity immediately apparent without manual reconstruction.
        *   **Limitation 2: Limited Searchability and Interconnectivity.** Print editions offer no inherent search functionality beyond the index, and their ability to link to external resources (dictionaries, historical maps, other texts) is severely restricted. This limits the depth of analysis and contextualization. A DSE, being machine-readable, enables powerful full-text searching across all encoded versions and metadata. It can also embed hyperlinks to external databases, glossaries, or geographical information systems, enriching the user's understanding and facilitating new research questions that cross disciplinary boundaries.

2.  **Question:** What is the primary conceptual difference between a "digital surrogate" and a "digital scholarly edition" (DSE)? Why is this distinction crucial for digital humanities scholarship?
    *   **Model Response:** The primary conceptual difference lies in their underlying structure and functionality. A **digital surrogate** is essentially a digital reproduction of a physical document, such as a high-resolution scan or photograph. While it offers improved access and preservation, it primarily mimics the visual appearance of the original and does not inherently encode the text's structure, semantics, or content in a machine-readable way. In contrast, a **digital scholarly edition (DSE)** is built upon a structured, machine-readable encoding of the text (often using XML/TEI), which represents not just the words but also their inherent structure (paragraphs, headings, speeches), features (hand changes, deletions, additions), and metadata. This distinction is crucial because a digital surrogate, while useful, remains largely inert for computational analysis; it cannot be easily searched, transformed, or dynamically rendered in multiple ways. A DSE, however, leverages descriptive markup to unlock the text's full potential for advanced computational analysis, dynamic presentation, and deep semantic interoperability, fundamentally changing how scholars can interact with and interpret textual data.

#### AI generation note
Create a 15-minute video lecture with an engaging, scholarly but accessible tone. Use a split-screen format: one side shows historical examples of print critical apparatus (e.g., a page from a Shakespeare variorum or a medieval text edition), and the other side shows an animated conceptualization of a digital interface for comparing textual variants. Include archival footage or images of early digital humanities projects (e.g., Women Writers Project website screenshots). Illustrate the "variorum" challenge in print versus a dynamic digital solution. End with a 2-minute reflection prompt asking learners to consider how a DSE might change their own research practices. Ensure all on-screen text is highly legible and accompanied by voiceover.

---

### Chapter 1.2 — Understanding Markup Languages: From SGML to XML

#### Learning objectives
*   Define "markup" and differentiate between procedural and descriptive markup, explaining the advantages of the latter for scholarly work.
*   Trace the historical development of markup languages from SGML to XML, identifying the key innovations and motivations behind each.
*   Identify the fundamental components of an XML document, including elements, attributes, and their proper nesting.
*   Distinguish between "well-formed" and "valid" XML documents, understanding the role of DTDs and XML Schemas.

#### Detailed lesson content
At the heart of digital scholarly editing lies the concept of "markup." In its simplest form, markup refers to annotations or instructions added to a text to provide additional information about its structure, appearance, or meaning. Historically, markup existed in the margins of manuscripts—scribal *procedural markup**, which tells a computer *how* to display or format a text. Think of early word processors where you might type a command like `.bold` before a word and `.endbold` after it. The focus here is on presentation: "make this text bold," "center this paragraph." While useful for simple formatting, procedural markup is inherently limited for scholarly purposes because it conflates content with presentation. It tells you nothing about *why* something is bold (is it a title? a foreign word? an emphasis?).

The limitations of procedural markup led to the development of **descriptive markup**. Instead of telling a computer *how* to display something, descriptive markup describes *what* something is. For example, instead of `<bold>Chapter Title</bold>`, descriptive markup would use `<chapterTitle>Chapter Title</chapterTitle>`. This distinction is profound. By describing the semantic role or structural function of a text segment, descriptive markup separates content from presentation. This means the same marked-up text can be displayed in multiple ways (e.g., as a webpage, a PDF, an e-book) without altering the underlying data. More importantly for scholars, descriptive markup allows for sophisticated querying and analysis. You can ask a computer to "find all chapter titles" or "extract all character speeches," which is impossible with purely procedural markup. This semantic richness is the cornerstone of machine-readability and interoperability in the digital humanities.

The lineage of modern descriptive markup languages begins with **SGML (Standard Generalized Markup Language)**, an ISO standard developed in the 1980s. SGML was a meta-language, meaning it provided a framework for defining other markup languages. Its goal was to enable the creation of platform-independent, application-independent, and device-independent documents. SGML was incredibly powerful and flexible, capable of modeling highly complex document structures. However, its very power led to its complexity; SGML was notoriously difficult to implement and parse, requiring specialized software and expertise. It gained traction in large-scale publishing and government initiatives, but its steep learning curve prevented wider adoption.

Recognizing the need for a simpler, web-friendly descriptive markup language, the World Wide Web Consortium (W3C) developed **XML (eXtensible Markup Language)** in the mid-1990s. XML is essentially a simplified subset of SGML, designed to be easier to use, implement, and parse, while retaining the core principles of descriptive markup. XML is "extensible" because, like SGML, it is a meta-language: it allows users to define their *own* tags (elements) and attributes to describe their specific data. This flexibility makes it ideal for diverse applications, from data exchange between systems to, crucially for us, encoding complex scholarly texts.

An XML document is built from fundamental components:
*   **Elements:** These are the primary structural units, marked by start tags (e.g., `<chapter>`) and end tags (e.g., `</chapter>`). They must be properly nested, meaning an element opened within another must be closed before its parent is closed (e.g., `<book><chapter></chapter></book>` is correct, `<book><chapter></book></chapter>` is incorrect).
*   **Attributes:** These provide additional information about an element, appearing as name-value pairs within the start tag (e.g., `<chapter id="ch1" type="introduction">`). Attributes are crucial for adding metadata or specific properties to an element without creating new nested elements.
*   **Content:** The text or other elements contained within an element.

For an XML document to be useful, it must adhere to certain rules. First, it must be **well-formed**. This means it follows the basic syntax rules of XML: every start tag has a matching end tag (or is self-closing, like `<br/>`), elements are properly nested, attribute values are quoted, and there's a single root element. A parser will reject any document that is not well-formed. Second, an XML document can be **valid**. Validity goes a step further: it means the document conforms to a predefined set of rules that specify which elements and attributes are allowed, where they can appear, and what their content models are. These rules are typically defined in a **Document Type Definition (DTD)** or an **XML Schema**. A DTD, inherited from SGML, provides a formal grammar for the document structure. XML Schema, a more modern and powerful alternative, offers greater data typing capabilities and is itself written in XML. For scholarly editing, validity is paramount because it ensures consistency, facilitates automated processing, and guarantees that the encoded text adheres to a specific intellectual model. A common mistake for beginners is to confuse XML with HTML; while both are markup languages, HTML has a fixed set of tags for web display, whereas XML allows you to define *any* tags relevant to your data, making it a powerful tool for semantic encoding, not just presentation.

#### Key concepts
*   **Markup:** Annotations or instructions added to a text to provide additional information about its structure, appearance, or meaning.
*   **Procedural Markup:** Markup that specifies *how* a text should be formatted or displayed (e.g., bold, italic, center).
*   **Descriptive Markup:** Markup that describes *what* a text segment is or its semantic role (e.g., `<title>`, `<paragraph>`, `<author>`).
*   **SGML (Standard Generalized Markup Language):** An ISO standard meta-language for defining descriptive markup languages, precursor to XML.
*   **XML (eXtensible Markup Language):** A simplified, widely adopted subset of SGML, designed for ease of use and web integration, allowing users to define custom tags.
*   **Element:** The primary structural unit in XML, marked by a start tag and an end tag (e.g., `<chapter>...</chapter>`).
*   **Attribute:** A name-value pair that provides additional information about an element, placed within the start tag (e.g., `<chapter type="introduction">`).
*   **Well-formed XML:** An XML document that adheres to the basic syntactic rules of XML (e.g., proper nesting, matching tags).
*   **Valid XML:** A well-formed XML document that also conforms to a predefined set of rules specified in a DTD or XML Schema.
*   **DTD (Document Type Definition):** A formal grammar that defines the allowed elements, attributes, and their relationships in an XML document.
*   **XML Schema:** A more powerful and flexible alternative to DTDs, also written in XML, for defining the structure and content of XML documents.

#### Hands-on activity
Consider the following short excerpt from a hypothetical letter:

```
Dear Mr. Smith,

I hope this letter finds you well. I am writing to inquire about the position of Digital Archivist, advertised in the "Scholarly Times" on October 26, 2023. I believe my skills in XML and metadata management would be a great asset.

Sincerely,
Jane Doe
```

**Task:** Using your understanding of descriptive markup and XML, encode this letter excerpt.
1.  Identify at least 5 distinct semantic or structural components (e.g., salutation, body paragraph, publication title, date, signature).
2.  Create appropriate XML elements and attributes for these components.
3.  Ensure your XML is well-formed.

**Example of a possible element:** `<salutation>Dear Mr. Smith,</salutation>`

#### Assessment idea
1.  **Question:** Examine the following XML snippet. Is it well-formed? Is it valid? Explain your reasoning, assuming no DTD or Schema is provided.

    ```xml
    <document>
        <title>My Document</title>
        <paragraph>This is the first paragraph.
        <paragraph>This is the second paragraph.</paragraph>
    </document>
    ```
    *   **Model Response:**
        *   **Well-formedness:** This XML snippet is **NOT well-formed**. The `<paragraph>` element on line 3 is not properly closed before the parent `<document>` element attempts to close, and the second `<paragraph>` element on line 4 is opened within the first one but the first one is never closed. Elements must be properly nested: `<a><b></b></a>` is correct, `<a><b></a></b>` is incorrect.
        *   **Validity:** Since no DTD or XML Schema is provided, we cannot assess its validity. Validity requires a reference schema to check against. However, an XML parser would reject this document as not well-formed before even attempting to check for validity.

2.  **Question:** You are encoding a historical newspaper article. You want to mark up the name of the newspaper, the date of publication, and the headline of the article. Explain why using descriptive XML markup (e.g., `<newspaperTitle>`, `<publicationDate>`, `<headline>`) is superior to using procedural markup (e.g., making them bold or italic) for a digital humanities project.
    *   **Model Response:** Descriptive XML markup is superior for a digital humanities project because it focuses on the *meaning* and *structure* of the data rather than its *presentation*.
        *   **Semantic Richness and Analysis:** Using tags like `<newspaperTitle>` explicitly identifies the semantic role of that text segment. This allows scholars to query the data precisely (e.g., "find all articles from 'The Daily Chronicle'"), extract specific pieces of information for analysis (e.g., compile a list of all headlines), or perform computational tasks that rely on understanding the *type* of content. Procedural markup (bold, italic) only indicates visual emphasis, not what the emphasized text *is*.
        *   **Interoperability and Reusability:** Descriptive markup separates content from presentation. The same XML file can be transformed and displayed in countless ways (e.g., as a webpage, a print PDF, a database entry) without re-encoding the original text. This makes the data highly interoperable and reusable across different platforms and applications. Procedural markup, conversely, is tied to a specific display format; if the display needs to change, the markup often needs to be entirely redone.
        *   **Long-term Preservation:** Descriptive markup, by encoding the inherent structure and meaning, is more robust for long-term preservation. It ensures that the intellectual content and its scholarly interpretation are preserved independently of transient display technologies, making the data future-proof. Procedural markup's instructions might become obsolete as display technologies evolve.

#### AI generation note
Create a 12-minute animated explainer video. Start with a visual analogy of markup (e.g., a printer's proof with handwritten instructions vs. a librarian cataloging a book's components). Use clear, concise animations to differentiate procedural vs. descriptive markup with simple code examples. Then, use a timeline animation to show the evolution from SGML to XML, highlighting key features and motivations. Visually break down a simple XML document, showing how elements and attributes are nested and used. Include interactive pop-up quizzes asking learners to identify well-formed vs. ill-formed XML snippets. Visual style should be clean, modern, and use color-coding to highlight syntax. Provide full captions and a downloadable cheat sheet of XML syntax basics.

---

### Chapter 1.3 — Introduction to the Text Encoding Initiative (TEI): History and Philosophy

#### Learning objectives
*   Explain the historical context and the core problem that the Text Encoding Initiative (TEI) was created to solve.
*   Describe the fundamental philosophy of TEI, emphasizing its commitment to descriptive markup, extensibility, and community governance.
*   Identify TEI as an XML application and explain the significance of this relationship.
*   Summarize the role and structure of the TEI Guidelines (P5) as the authoritative documentation for TEI encoding.

#### Detailed lesson content
The journey from print to digital scholarly editing, and from generic markup to a specialized standard, inevitably leads us to the **Text Encoding Initiative (TEI)**. In the late 1980s, as scholars across the humanities began experimenting with digital texts, a significant problem emerged: a lack of interoperability. Everyone was creating their own unique sets of tags to mark up literary, linguistic, and historical texts. While these custom tag sets might work for individual projects, they made it incredibly difficult to share data, combine resources, or develop generic tools that could process texts from different sources. Imagine a world where every book publisher used a completely different way to indicate chapters, authors, and titles – it would be chaos for libraries and readers alike. The digital humanities faced a similar Tower of Babel problem.

It was in this context that the TEI was born. Initiated in 1987, the TEI was a collaborative, international project funded by various humanities organizations, bringing together scholars from literature, linguistics, history, and computer science. Their ambitious goal was to develop a common, comprehensive, and flexible standard for encoding machine-readable texts, particularly those of interest to the humanities. The driving force was to create a shared language that would facilitate the creation, interchange, and longevity of digital textual resources. This meant moving beyond project-specific solutions to a robust, community-driven standard.

The fundamental philosophy of TEI is deeply rooted in the principles of **descriptive markup** that we explored in the previous chapter. TEI tags describe the *features* of a text (e.g., a `<speaker>` in a play, a `<placeName>` in a historical document, a `<gap>` where text is missing in a manuscript), rather than dictating its appearance. This commitment ensures that TEI-encoded texts are highly versatile, allowing for multiple presentations and sophisticated analytical applications. Beyond descriptive markup, TEI embraces several other core tenets:
*   **Extensibility:** While TEI provides a vast array of tags, it also allows users to extend the schema by defining their own custom elements and attributes, or to constrain the schema by selecting only a subset of TEI's features. This "customize and constrain" approach ensures that TEI can be adapted to the specific needs of diverse projects without losing its core interoperability.
*   **Community-driven and Collaborative:** The TEI is governed by the **TEI Consortium**, an international body that maintains and develops the standard. This collaborative model ensures that the Guidelines evolve to meet the changing needs of the scholarly community, fostering a sense of shared ownership and best practices.
*   **Long-term Preservation:** By providing a stable, well-documented, and widely adopted standard, TEI aims to ensure the longevity and reusability of digital texts for generations to come. TEI files are plain text, making them inherently robust and less susceptible to technological obsolescence compared to proprietary formats.
*   **Semantic Encoding:** TEI encourages encoding not just the visible features of a text, but also its intellectual and historical significance. For instance, you don't just mark a name; you mark it as a `<persName>` and can add attributes to identify the person uniquely, linking to external authorities like VIAF or Wikidata.

Crucially, TEI is an **XML application**. This means that TEI is a set of rules and a vocabulary (its elements and attributes) defined *using* XML. Every TEI document is, by definition, a well-formed and valid XML document (assuming it conforms to the TEI Guidelines). This relationship is vital because it means TEI benefits from all the tools and technologies developed for XML: parsers, editors, transformation languages (like XSLT), and validation engines. It grounds TEI in a widely understood and robust technical framework, making it accessible to a broader range of developers and digital humanists.

The authoritative documentation for TEI is the **TEI Guidelines**, currently in its fifth major revision (P5). The Guidelines are not merely a list of tags; they are a comprehensive, encyclopedic resource that explains the philosophy behind TEI, provides detailed descriptions of every element and attribute, offers extensive examples, and discusses best practices for encoding various textual phenomena. Navigating the Guidelines can initially seem daunting due to their sheer scope, but they are meticulously organized, covering everything from basic structural elements like paragraphs and divisions to complex features like critical apparatus, linguistic annotation, and manuscript description. Understanding the Guidelines is key to mastering TEI, as it provides the intellectual framework and technical specifications for creating rich, interoperable, and enduring digital scholarly editions. A common mistake is to treat TEI as just another set of tags to memorize; rather, it's a powerful methodology for thinking about and representing textual complexity.

#### Key concepts
*   **Text Encoding Initiative (TEI):** An international consortium and a standard (an XML application) for representing texts in digital form, especially for scholarly, literary, and linguistic purposes.
*   **TEI Consortium:** The international body that maintains and develops the TEI standard, fostering a collaborative community.
*   **XML Application:** A specific set of XML elements, attributes, and rules defined for a particular domain or purpose (e.g., TEI is an XML application for text encoding).
*   **TEI Guidelines (P5):** The comprehensive and authoritative documentation that defines the TEI standard, providing element descriptions, examples, and best practices.
*   **Extensibility (in TEI):** The ability to customize the TEI schema by adding or modifying elements and attributes to suit specific project needs, while maintaining interoperability.
*   **Semantic Encoding (in TEI):** The practice of marking up text not just for its appearance, but for its meaning, function, and intellectual significance, often using attributes to link to external data.

#### Hands-on activity
Imagine you are part of a team planning a new digital edition of Mary Shelley's *Frankenstein*. Your team needs to decide on the core principles for encoding the text.

**Task:** Write a short memo (200-250 words) to your project manager outlining why the TEI standard is the most appropriate choice for this project, rather than creating a custom XML schema. In your memo, reference at least three specific philosophical or practical advantages of using TEI.

**Starter Material:**
*   Consider the long-term viability of the project.
*   Think about potential future collaborations or data sharing.
*   Reflect on the complexity of literary texts (e.g., character names, quotations, manuscript variants).

#### Assessment idea
1.  **Question:** The TEI is described as an "XML application." What does this mean, and why is this relationship significant for digital humanities projects?
    *   **Model Response:** Being an "XML application" means that the Text Encoding Initiative (TEI) is a specific set of rules, elements, and attributes that are defined *using* the XML (eXtensible Markup Language) framework. In essence, TEI provides a specialized vocabulary and grammar for encoding texts, but it adheres to all the fundamental syntax and structural rules of XML. This relationship is significant for digital humanities projects because it allows TEI to leverage the vast ecosystem of XML tools and technologies. Any XML parser, editor, or transformation language (like XSLT) can process TEI documents. This ensures interoperability, provides robust validation mechanisms (via DTDs or XML Schemas generated from the TEI Guidelines), and makes TEI-encoded data highly reusable and amenable to computational analysis, without needing entirely new software specific to TEI.

2.  **Question:** One of the core philosophies of TEI is "extensibility." Explain what this means in the context of TEI encoding and provide a hypothetical example of when a scholar might need to use TEI's extensibility features for a specific project.
    *   **Model Response:** In the context of TEI encoding, "extensibility" means that while the TEI Guidelines provide a comprehensive set of elements and attributes, scholars are not rigidly limited to this predefined vocabulary. Instead, TEI allows users to *customize* and *constrain* the schema to meet the unique requirements of their specific project. This can involve adding new elements or attributes not found in the standard TEI (e.g., for highly specialized textual phenomena) or selecting only a subset of the existing TEI modules.
        *   **Hypothetical Example:** Imagine a scholar is working on a digital edition of a collection of 18th-century medical recipes. While TEI has general elements for lists and items, it might not have specific elements for ingredients (`<ingredient>`), quantities (`<quantity>`), or preparation steps (`<preparationStep>`). Using TEI's extensibility features, the scholar could define these new elements within their project's TEI customization, ensuring that the unique structure and semantic information of the medical recipes are accurately captured in a machine-readable way, while still benefiting from the broader TEI framework for other aspects of the text (like the TEI Header).

#### AI generation note
Create a 10-minute animated documentary-style video. Begin with a historical montage of early computing and humanities scholarship, setting the scene for the "Tower of Babel" problem. Introduce the key figures or institutions involved in TEI's founding. Use a visual metaphor to explain "XML application" (e.g., XML as a language, TEI as a specialized dictionary and grammar for texts within that language). Show a brief, animated walkthrough of the TEI Guidelines website, highlighting its structure and search functionality. Emphasize the collaborative nature of the TEI Consortium. End with a 1-minute reflection prompt asking learners to consider the ethical implications of encoding choices for long-term preservation. Include archival images and text overlays for key dates and names.

---

### Chapter 1.4 — The TEI Header: Metadata for Scholarly Editions

#### Learning objectives
*   Understand the critical role of the TEI Header (`<teiHeader>`) in providing comprehensive metadata for digital scholarly editions.
*   Identify the four main top-level divisions within the `<teiHeader>` and their respective purposes.
*   Explain the significance of key elements within the `<fileDesc>` section, such as `<titleStmt>`, `<publicationStmt>`, and `<sourceDesc>`.
*   Demonstrate how to encode basic bibliographic and descriptive metadata within a TEI Header.
*   Recognize common pitfalls in creating TEI Headers and best practices for avoiding them.

#### Detailed lesson content
Just as a library catalog card provides essential information about a physical book—its author, title, publisher, and subject—the **TEI Header (`<teiHeader>`)** serves as the comprehensive metadata container for a digital scholarly edition. It is arguably the most crucial part of any TEI document, providing the intellectual and administrative context necessary to understand, use, and preserve the encoded text. Neglecting or inadequately populating the TEI Header is a common and serious mistake, as it renders the scholarly work less discoverable, less trustworthy, and ultimately less useful for future generations of scholars. Without robust metadata, a digital text is merely a string of characters; with it, it becomes a documented, attributable, and contextualized scholarly artifact.

The `<teiHeader>` is a mandatory component of every TEI document and is designed to contain all the descriptive and administrative metadata about the electronic text itself. It is structured into four main top-level divisions, each serving a distinct purpose:

1.  **`<fileDesc>` (File Description):** This is the most important section, providing a full bibliographic description of the electronic file. It answers the fundamental questions: What is this text? Who created it? Who published it? Where did the source material come from?
    *   **`<titleStmt>` (Title Statement):** Contains the title of the electronic text, along with information about its author(s), editor(s), and any other individuals responsible for its intellectual content. For example, `<title>The Adventures of Sherlock Holmes: A Digital Edition</title><author>Arthur Conan Doyle</author><editor>Dr. Watson (digital editor)</editor>`.
    *   **`<publicationStmt>` (Publication Statement):** Details about the publication or distribution of the electronic text. This includes the publisher, place of publication, date, and any availability information. For instance, `<publisher>Cohortia Digital Press</publisher><pubPlace>Online</pubPlace><date>2024</date>`.
    *   **`<sourceDesc>` (Source Description):** Crucially, this section describes the source text(s) from which the electronic edition was created. This is where you document the physical manuscript, printed book, or other document that served as your primary witness. It might include elements like `<bibl>...</bibl>` or `<msDesc>...</msDesc>` to provide detailed bibliographic or manuscript descriptions. This establishes the provenance of your digital edition.

2.  **`<encodingDesc>` (Encoding Description):** This section documents the encoding principles and practices used in creating the TEI file. It explains *how* the text was encoded. This includes details about the editorial methods employed (e.g., how abbreviations were expanded, how errors were handled), the normalization practices, and any specific TEI modules used. This is vital for transparency and for understanding the editorial choices embedded in the digital text. For example, `<editorialDecl><p>Abbreviations have been silently expanded. Emendations are marked with &lt;supplied&gt;.</p></editorialDecl>`.

3.  **`<profileDesc>` (Profile Description):** This section provides information about the non-bibliographic aspects of the text itself, such as the languages used, the participants (people, places, organizations) mentioned, and the creation context. For a play, it might list the characters; for a historical document, it might list places. This section is particularly useful for semantic enrichment and linking to external authority files.

4.  **`<revisionDesc>` (Revision Description):** This section acts as a version control log for the electronic file. It records every significant change made to the TEI document, including the date of revision, the person responsible, and a brief description of the changes. This is essential for tracking the evolution of the digital edition and maintaining its integrity over time. For example, `<change when="2024-03-15" who="#JD">Initial encoding of Chapter 1.</change>`.

The meticulous construction of the TEI Header is not just a bureaucratic requirement; it is an act of scholarly responsibility. It ensures intellectual accountability by clearly attributing authorship and editorial work. It enhances discoverability by providing rich, machine-readable metadata that can be harvested by digital libraries and search engines. Most importantly, it supports long-term preservation by documenting the digital object's origins, creation process, and evolution, ensuring that future scholars can understand and trust the data. A common pitfall is to provide minimal or generic information, especially in `<sourceDesc>` and `<encodingDesc>`. Instead, aim for rich, precise detail, treating the header as an integral part of your scholarly argument about the text. The TEI Guidelines provide extensive guidance on how to populate each of these sections with appropriate elements and attributes, including linking to external identifiers for persons, places, and organizations, thereby grounding your digital edition within the broader ecosystem of linked open data.

#### Key concepts
*   **TEI Header (`<teiHeader>`):** The mandatory top-level element in a TEI document that contains all the metadata describing the electronic text.
*   **Metadata:** Data that provides information about other data; in TEI, it describes the electronic text file and its source.
*   **`<fileDesc>`:** The section of the TEI Header that provides a full bibliographic description of the electronic text.
*   **`<titleStmt>`:** Within `<fileDesc>`, describes the title, author(s), and editor(s) of the electronic text.
*   **`<publicationStmt>`:** Within `<fileDesc>`, describes the publication or distribution details of the electronic text.
*   **`<sourceDesc>`:** Within `<fileDesc>`, describes the original source text(s) from which the electronic edition was created, establishing its provenance.
*   **`<encodingDesc>`:** The section of the TEI Header that documents the encoding principles, editorial methods, and practices used in creating the TEI file.
*   **`<profileDesc>`:** The section of the TEI Header that provides non-bibliographic descriptions of the text itself, such as languages, participants, and creation context.
*   **`<revisionDesc>`:** The section of the TEI Header that records the history of changes and revisions made to the electronic TEI file.
*   **Provenance:** The place of origin or earliest known history of something; in TEI, documenting the source text(s) in `<sourceDesc>`.

#### Hands-on activity
You are beginning to encode a short 19th-century letter written by Jane Austen. You have identified the following information:

*   **Title of your digital edition:** "Letter from Jane Austen to Cassandra Austen, 1813"
*   **Author of the letter:** Jane Austen
*   **Digital Editor:** Your Name (e.g., "A. Learner")
*   **Publisher of the digital edition:** Cohortia Digital Editions
*   **Place of digital publication:** Online
*   **Date of digital publication:** Today's Date (e.g., "2024-04-23")
*   **Source of the letter:** Original manuscript held at the British Library, shelfmark "Add MS 41258, f. 123r"
*   **Encoding principle:** All abbreviations in the original manuscript have been silently expanded.

**Task:** Construct a basic `<teiHeader>` for this project, including the `<fileDesc>` and `<encodingDesc>` sections, using appropriate TEI elements and attributes. Focus on providing clear and accurate metadata.

**Starter XML Structure:**
```xml
<teiHeader>
    <fileDesc>
        <!-- Your titleStmt, publicationStmt, and sourceDesc here -->
    </fileDesc>
    <encodingDesc>
        <!-- Your editorialDecl here -->
    </encodingDesc>
</teiHeader>
```

#### Assessment idea
1.  **Question:** Explain the primary purpose of the `<sourceDesc>` element within the TEI Header. Why is it considered crucial for the scholarly integrity and long-term value of a digital edition?
    *   **Model Response:** The primary purpose of the `<sourceDesc>` element within the TEI Header is to provide a comprehensive and precise description of the original source text(s) from which the electronic edition was created. This includes details such as the type of source (e.g., manuscript, printed book), its physical location (e.g., library, archive), shelfmark or accession number, and any relevant bibliographic information.
        *   It is crucial for scholarly integrity because it establishes the **provenance** of the digital edition, allowing future users to trace the digital text back to its physical origin. This transparency is fundamental for verifying the accuracy of the transcription, understanding editorial decisions, and assessing the reliability of the digital resource. Without a detailed `<sourceDesc>`, the digital edition lacks scholarly grounding, making it difficult to trust its authenticity or to conduct further research based on it, thereby diminishing its long-term value.

2.  **Question:** You are reviewing a TEI file for a digital edition of a historical diary. You notice that the `<revisionDesc>` section is completely empty. What are the potential consequences of this omission for the project, and what kind of information should ideally be included in this section?
    *   **Model Response:** The omission of a `<revisionDesc>` section can have several significant negative consequences for the project:
        *   **Lack of Version Control:** It becomes impossible to track the evolution of the digital edition. Users won't know when changes were made, by whom, or what those changes entailed, leading to confusion about the current state of the file.
        *   **Compromised Trust and Accountability:** Without a revision history, the scholarly accountability of the digital edition is diminished. If errors are found or updates are made, there's no transparent record of how the text has been maintained or improved over time.
        *   **Difficulty in Collaboration:** For collaborative projects, an empty `<revisionDesc>` makes it challenging for team members to coordinate work, understand who did what, and resolve conflicts.
        *   **Hindered Preservation:** For long-term preservation, understanding the lifecycle of a digital object is vital. An empty revision history makes it harder for archives to manage and preserve the resource effectively.
        *   Ideally, the `<revisionDesc>` section should include a series of `<change>` elements, each documenting a specific modification to the TEI file. Each `<change>` element should have a `when` attribute (specifying the date of the change), a `who` attribute (identifying the person responsible, often linking to an `<idno>` in the `<fileDesc>`), and a clear, concise description of the change (e.g., "Initial encoding of Chapter 1," "Corrected typo in line 345," "Added new entity declarations").

#### AI generation note
Create a 15-minute interactive walkthrough of a sample TEI Header. Use a split-screen format: the left side displays the raw XML of a well-populated TEI Header, and the right side features a live instructor highlighting and explaining each element and attribute (e.g., `<titleStmt>`, `<author>`, `<publicationStmt>`, `<sourceDesc>`, `<editorialDecl>`, `<revisionDesc>`). Use animated overlays to show how attributes add specific metadata. Include a 3-minute interactive exercise where learners are prompted to fill in missing information in a partially completed TEI Header, followed by a model answer reveal. Emphasize the semantic meaning behind each tag. Provide full captions and a downloadable template of a basic TEI Header.

---

## Module 2: XML Fundamentals for TEI

**Goal:** To equip learners with a foundational understanding of XML syntax, structure, and validation, specifically tailored for its application in TEI encoding.

### Chapter 2.1 — Introduction to XML: Syntax and Well-Formedness

#### Learning objectives
*   Identify the core components of XML syntax, including elements, attributes, and the root element.
*   Distinguish between well-formed and non-well-formed XML documents.
*   Explain the significance of proper nesting and closing tags in XML.
*   Construct simple, well-formed XML documents following best practices.
*   Recognize common errors that lead to non-well-formed XML.

#### Detailed lesson content
Welcome to the foundational module for understanding the Text Encoding Initiative (TEI). Before we can delve into the intricacies of TEI, we must first master its underlying language: Extensible Markup Language, or XML. Think of XML as the sturdy framework upon which the rich edifice of TEI encoding is built. Unlike HTML, which has a predefined set of tags for displaying web content, XML is designed to describe data, allowing you to create your own custom tags. This flexibility is precisely what makes it so powerful for scholarly editing, as it allows us to represent the nuanced structures and features of historical texts with precision and granularity.

At its heart, XML is about marking up information using tags. Every XML document begins with an XML declaration, which simply states the XML version and character encoding, like `<?xml version="1.0" encoding="UTF-8"?>`. This line is crucial for parsers to correctly interpret your document. Following this, every XML document must have exactly one *root element*. This root element encloses all other content within the document, acting as the single top-level container. For instance, if you were encoding a letter, your root element might be `<letter>`, and everything about that letter – its sender, recipient, date, body – would be nested within it.

The primary building blocks of XML are *elements*. An element consists of a *start tag*, content, and an *end tag*. For example, `<paragraph>This is some text.</paragraph>`. The text "This is some text." is the *content* of the `paragraph` element. Elements can also be empty, meaning they contain no content, in which case they can be written as `<emptyElement></emptyElement>` or, more concisely, as a *self-closing tag*: `<emptyElement/>`. The choice between these often depends on whether the element is conceptually capable of containing content, even if it's empty in a specific instance. A crucial rule for elements is proper *nesting*: if an element starts inside another element, it must end inside that element. This is often where beginners make mistakes, leading to non-well-formed XML. Consider the incorrect nesting: `<chapter><section>Some text</chapter></section>`. Here, `chapter` is closed before `section`, violating the nesting rule. The correct form would be `<chapter><section>Some text</section></chapter>`. This strict hierarchical structure is fundamental to XML's ability to represent complex relationships in data.

Beyond elements, *attributes* provide additional information about an element. Attributes are name-value pairs placed inside the start tag of an element. For example, `<person gender="male" id="p001">John Doe</person>`. Here, `gender` and `id` are attributes of the `person` element, providing metadata that describes John Doe without being part of his name content. Attribute values must always be enclosed in single or double quotes. While it might seem arbitrary whether to use an element or an attribute for a piece of information, a good rule of thumb is that if the information is structural or describes the element itself, an attribute is often appropriate. If the information is content that could potentially be further marked up, an element is usually better. For instance, a person's birth date might be an attribute (`<person born="1980-05-15">`), but their full biography would certainly be an element (`<biography>...</biography>`).

The concept of *well-formedness* is paramount in XML. A well-formed XML document is one that adheres to all the basic syntactic rules of XML. This includes having a single root element, all start tags having corresponding end tags (or being self-closing), proper nesting, valid character usage, and attribute values being quoted. An XML parser will immediately reject any document that is not well-formed. This strictness is a feature, not a bug; it guarantees that any XML document can be reliably processed by software, which is essential for digital humanities projects dealing with large and complex datasets. Common pitfalls include forgetting to close a tag, misspelling a tag, using unescaped special characters (like `<` or `&` directly in content, which must be represented as `&lt;` and `&amp;`), or attempting to use multiple root elements. Always remember that XML is case-sensitive: `<tag>` is different from `<Tag>`. This means that your start and end tags must match exactly in case.

Let's look at a simple example of a well-formed XML snippet that might represent a short poem:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<poem title="Ozymandias" author="Percy Bysshe Shelley">
  <stanza n="1">
    <line>I met a traveller from an antique land,</line>
    <line>Who said—“Two vast and trunkless legs of stone</line>
    <line>Stand in the desert. . . . Near them, on the sand,</line>
    <line>Half sunk, a shattered visage lies, whose frown,</line>
    <line>And wrinkled lip, and sneer of cold command,</line>
    <line>Tell that its sculptor well those passions read</line>
    <line>Which yet survive, stamped on these lifeless things,</line>
    <line>The hand that mocked them, and the heart that fed;</line>
  </stanza>
</poem>
```
In this example, `<poem>` is the root element. It has `title` and `author` attributes. Inside, there's a `<stanza>` element with an `n` attribute for its number, and within that, multiple `<line>` elements. Notice the consistent nesting and closing of tags. This structure clearly describes the components of the poem, making it machine-readable and human-understandable. This is the essence of what we aim to achieve with TEI: creating rich, structured digital representations of texts.

#### Key concepts
*   **XML Declaration:** The initial processing instruction specifying the XML version and character encoding (e.g., `<?xml version="1.0" encoding="UTF-8"?>`).
*   **Root Element:** The single top-level element that contains all other content in an XML document.
*   **Element:** A fundamental building block of XML, consisting of a start tag, content (optional), and an end tag (e.g., `<tag>content</tag>`).
*   **Attribute:** A name-value pair providing additional information about an XML element, placed within the element's start tag (e.g., `<element name="value">`).
*   **Well-formedness:** The property of an XML document that adheres to all basic syntactic rules of XML, making it parsable by any XML processor.
*   **Nesting:** The hierarchical arrangement of XML elements, where an element started within another must also end within that same element.
*   **Self-closing tag:** A concise way to represent an empty XML element (e.g., `<emptyElement/>`).

#### Hands-on activity
**Constructing a Simple Well-Formed XML Document**

Imagine you are creating a simple digital catalog of historical figures. Your task is to encode information for two individuals using well-formed XML.

**Instructions:**
1.  Open a plain text editor (like Notepad, VS Code, Sublime Text, or even a simple online XML editor).
2.  Start with the XML declaration.
3.  Create a root element called `<historicalFigures>`.
4.  Inside the root element, create two `<person>` elements.
5.  Each `<person>` element should have the following attributes: `id` (a unique identifier like "fig001"), `gender`, and `era`.
6.  Inside each `<person>` element, include the following nested elements:
    *   `<name>` (with the person's full name as content)
    *   `<birthDate>` (with the birth year as content, e.g., "1770")
    *   `<deathDate>` (with the death year as content, e.g., "1827")
    *   `<notableAchievement>` (a brief description of a key achievement)
7.  Ensure all tags are correctly opened, closed, and nested, and all attribute values are quoted.

**Example structure for one person (do not copy directly, create your own content):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<historicalFigures>
  <person id="fig001" gender="male" era="Romantic">
    <name>Ludwig van Beethoven</name>
    <birthDate>1770</birthDate>
    <deathDate>1827</deathDate>
    <notableAchievement>Composed nine symphonies, including the iconic Ninth Symphony.</notableAchievement>
  </person>
  <!-- Add your second person here -->
</historicalFigures>
```

#### Assessment idea
1.  **Question:** Which of the following XML snippets is NOT well-formed, and why?
    a) `<?xml version="1.0"?><book><title>Moby Dick</title></book>`
    b) `<?xml version="1.0"?><chapter><section>Intro</chapter></section>`
    c) `<?xml version="1.0"?><item id="A123" type="electronic"/>`
    d) `<?xml version="1.0"?><data><value>10 &amp; 20</value></data>`

    **Model Response:**
    The non-well-formed snippet is **b) `<?xml version="1.0"?><chapter><section>Intro</chapter></section>`**.
    **Reason:** It violates the rule of proper nesting. The `<chapter>` element is closed before the `<section>` element that was opened inside it. The correct nesting would be `<chapter><section>Intro</section></chapter>`.

2.  **Question:** You are encoding a short biographical entry for a scholar. You have their name, their primary field of study, and a unique identifier. Write a well-formed XML snippet for this entry, deciding whether to use elements or attributes for each piece of information, and justify your choices.

    **Model Response:**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <scholar id="sch005">
      <name>Dr. Eleanor Vance</name>
      <field>Digital Philology</field>
    </scholar>
    ```
    **Justification:**
    *   **`id="sch005"` as an attribute:** The unique identifier `id` is metadata that describes the `<scholar>` element itself. It's a short, distinct piece of information that helps identify the scholar within a larger dataset, making it suitable as an attribute.
    *   **`<name>` as an element:** The scholar's name is content that could potentially be further structured (e.g., `<firstName>`, `<lastName>`). As a primary piece of textual content, it's better represented as an element.
    *   **`<field>` as an element:** The primary field of study is also descriptive content that might be expanded upon or categorized in more detail later (e.g., with sub-fields or historical periods). Therefore, an element is more appropriate than an attribute.

#### AI generation note
Create a 15-minute interactive video lecture. Begin with a clear animation illustrating the XML declaration and the concept of a single root element using a simple `<document>` example. Then, use a split-screen approach to demonstrate elements and attributes: the left side shows XML code snippets (e.g., `<book title="Hamlet">`), and the right side uses visual overlays (highlighting "book" as element, "title" as attribute name, "Hamlet" as attribute value). Dedicate a segment to common well-formedness errors (e.g., improper nesting, unclosed tags, unquoted attributes), showing incorrect code and then the corrected version with an explanation of *why* it's wrong. Conclude with a 3-minute interactive drag-and-drop exercise where learners correct 3 non-well-formed XML snippets by dragging missing tags or quotes into place. Ensure full captions and a downloadable cheat sheet of XML syntax rules.

### Chapter 2.2 — XML Schemas: DTDs and XML Schema (XSD)

#### Learning objectives
*   Explain the fundamental purpose and necessity of XML schemas in digital humanities projects.
*   Differentiate between Document Type Definitions (DTDs) and XML Schema Definitions (XSDs) in terms of their capabilities and syntax.
*   Interpret basic elements of a DTD, such as element declarations and attribute lists.
*   Understand the advantages of XSDs over DTDs, particularly for data typing and extensibility.
*   Recognize how TEI leverages schema languages to define its extensive vocabulary and structure.

#### Detailed lesson content
While well-formedness ensures an XML document is syntactically correct and parsable, it doesn't guarantee that the document makes sense in a specific context. For instance, a well-formed document might contain an element `<banana>` inside a `<book>` element, which is syntactically fine but semantically nonsensical for a book description. This is where XML schemas come into play. A *schema* defines the permissible structure and content of an XML document, acting as a blueprint or a grammar. It specifies which elements and attributes are allowed, where they can appear, their order, how many times they can occur, and even their data types. In digital humanities, especially with TEI, schemas are absolutely critical because they enforce consistency and interoperability across vast collections of encoded texts, ensuring that all encoders follow the same rules for representing features like paragraphs, names, or dates. Without a schema, every encoder might invent their own tags, leading to chaos and making automated processing impossible.

Historically, the first widely adopted schema language for XML was the *Document Type Definition (DTD)*. DTDs are written in a non-XML syntax and define elements, attributes, entities, and notations. For example, an element declaration in a DTD looks like `<!ELEMENT chapter (title, paragraph+)>`, meaning a `chapter` element must contain a `title` followed by one or more `paragraph` elements. Attributes are declared using `<!ATTLIST chapter id CDATA #REQUIRED>`, indicating that `chapter` must have an `id` attribute whose value is character data. DTDs are relatively simple to write and understand for basic structures, and they are still used in some legacy systems and for very simple XML applications. Their primary limitation, however, is their lack of expressiveness. DTDs cannot easily define complex data types (like integers, dates, or booleans), cannot enforce namespaces, and their syntax is not XML itself, which makes them less flexible for programmatic manipulation.

Recognizing the limitations of DTDs, the W3C developed *XML Schema Definition (XSD)*. XSDs are themselves XML documents, which is a significant advantage as they can be processed and validated using standard XML tools. XSDs offer a much richer and more powerful set of features compared to DTDs. They support a wide range of data types (e.g., `xs:string`, `xs:integer`, `xs:date`, `xs:boolean`), allowing for much more precise validation of content. For instance, you could define an attribute `year` to be of type `xs:gYear`, ensuring that only valid year formats are accepted. XSDs also support namespaces, which are crucial for combining elements from different vocabularies (like TEI and SVG) within a single document without name collisions. Furthermore, XSDs allow for more complex content models, including choice groups (`<xs:choice>`) and sequence groups (`<xs:sequence>`), and enable the creation of reusable complex types. This modularity and extensibility make XSDs ideal for sophisticated applications like TEI, which needs to define thousands of elements and attributes.

Let's consider a simple comparison. Imagine we want to define a `date` element that must contain a year.
**In DTD:**
```xml
<!ELEMENT date (#PCDATA)>
<!ATTLIST date year CDATA #REQUIRED>
```
This DTD only states that `date` can contain parsed character data and must have a `year` attribute, but it doesn't enforce that `year` is actually a number.

**In XSD:**
```xml
<xs:element name="date">
  <xs:complexType>
    <xs:simpleContent>
      <xs:extension base="xs:string">
        <xs:attribute name="year" type="xs:gYear" use="required"/>
      </xs:extension>
    </xs:simpleContent>
  </xs:complexType>
</xs:element>
```
This XSD snippet is more verbose, but it explicitly states that the `year` attribute must be of type `xs:gYear`, which is a built-in XML Schema data type for a Gregorian year. This provides much stronger validation. If an XML document validated against this XSD had `<date year="nineteen ninety">`, it would be flagged as invalid, whereas the DTD would accept it.

The Text Encoding Initiative (TEI) relies heavily on XML Schema (XSD), specifically a modular system of XSDs, to define its vast and flexible tag set. The TEI Guidelines themselves are a comprehensive documentation of this schema. When you encode a text in TEI, you are essentially creating an XML document that conforms to the TEI schema. This schema ensures that when you use a `<p>` tag for a paragraph, it behaves consistently with how other TEI users expect a paragraph to behave, and that it can only contain the elements specified in the TEI Guidelines (e.g., `<hi>` for highlighting, `<name>` for names, but not arbitrary elements like `<banana>`). The TEI schema allows for customization through a process called "ODD" (One Document Does it all), where scholars can select specific modules and define their own extensions while still maintaining compatibility with the core TEI framework. This balance between standardization and flexibility is one of TEI's greatest strengths, directly enabled by the power of XSDs. Understanding schemas is not just about technical compliance; it's about understanding the grammar of your scholarly data, ensuring its integrity, and facilitating its long-term preservation and interoperability.

#### Key concepts
*   **Schema:** A formal definition that specifies the permissible structure, content, and data types for an XML document, ensuring validity beyond mere well-formedness.
*   **Validity:** The property of an XML document that conforms to the rules defined by an associated schema.
*   **Document Type Definition (DTD):** An older, non-XML schema language for defining the structure and elements of XML documents.
*   **XML Schema Definition (XSD):** A more powerful and flexible XML-based schema language that supports data types, namespaces, and complex content models.
*   **Data Type:** A specification within a schema that defines the kind of values an element or attribute can hold (e.g., string, integer, date, boolean).
*   **Content Model:** The rules defined in a schema that specify what elements and in what order/quantity can appear within another element.

#### Hands-on activity
**Interpreting a Simple DTD and XSD for a Book Chapter**

You are given two schema fragments, one DTD and one XSD, designed to validate a simple XML structure for a book chapter. Your task is to analyze them and answer questions about their definitions.

**DTD Fragment:**
```xml
<!ELEMENT chapter (title, paragraph+)>
<!ATTLIST chapter id CDATA #REQUIRED>
<!ELEMENT title (#PCDATA)>
<!ELEMENT paragraph (#PCDATA)>
```

**XSD Fragment:**
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="chapter">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="title" type="xs:string"/>
        <xs:element name="paragraph" type="xs:string" minOccurs="1" maxOccurs="unbounded"/>
      </xs:sequence>
      <xs:attribute name="id" type="xs:ID" use="required"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

**Questions for analysis:**
1.  According to the DTD, what elements must a `chapter` contain, and in what order?
2.  What attribute is required for the `chapter` element in both the DTD and XSD?
3.  How does the XSD specify that there must be at least one `paragraph` and potentially many, and how does this compare to the DTD's specification?
4.  What is a key advantage of the XSD's definition of the `id` attribute compared to the DTD's?

#### Assessment idea
1.  **Question:** An XML document contains the element `<date year="1850" month="03" day="12"/>`. If you wanted to ensure that `year`, `month`, and `day` attributes only contain valid numerical values, which schema language (DTD or XSD) would be more suitable, and why?

    **Model Response:**
    **XSD (XML Schema Definition)** would be more suitable.
    **Reason:** XSDs offer robust data typing capabilities (e.g., `xs:gYear`, `xs:gMonth`, `xs:gDay`, or `xs:integer`). A DTD's `CDATA` type for attributes simply treats values as character data, meaning it cannot enforce that "1850" is a number or that "03" is a valid month. XSD allows for precise validation of numerical ranges and date formats, ensuring data integrity.

2.  **Question:** Consider the following XML snippet:
    ```xml
    <book>
      <title>The Great Gatsby</title>
      <author>F. Scott Fitzgerald</author>
      <publicationYear>1925</publicationYear>
    </book>
    ```
    Write a simple DTD that would validate this XML structure.

    **Model Response:**
    ```xml
    <!ELEMENT book (title, author, publicationYear)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT author (#PCDATA)>
    <!ELEMENT publicationYear (#PCDATA)>
    ```
    **Explanation:**
    *   `<!ELEMENT book (title, author, publicationYear)>` defines that a `book` element must contain exactly one `title`, followed by one `author`, followed by one `publicationYear`, in that specific order.
    *   `<!ELEMENT title (#PCDATA)>`, `<!ELEMENT author (#PCDATA)>`, and `<!ELEMENT publicationYear (#PCDATA)>` define that these elements can contain parsed character data (i.e., text content).

#### AI generation note
Design a 10-minute animated explainer video. Start by visually contrasting a well-formed but invalid XML document (e.g., a `<book>` with a `<banana>` element) with a well-formed and valid one. Introduce DTDs with a simple example, showing the DTD syntax for an element and an attribute, and then animate how an XML parser checks against it. Transition to XSDs, highlighting their XML-based syntax and the concept of data types (e.g., demonstrating `xs:integer` preventing text input). Use a visual metaphor, like a "data filter" or "blueprint," to explain the role of schemas. Include a specific example of how TEI's modular XSDs allow scholars to customize their encoding while maintaining standards. End with a 2-question interactive quiz asking learners to identify a DTD vs. XSD snippet and a question about the primary benefit of XSD data typing. Provide full captions and a downloadable comparison chart of DTD vs. XSD features.

### Chapter 2.3 — Navigating XML Documents: XPath Basics

#### Learning objectives
*   Explain the fundamental purpose of XPath in querying and selecting nodes within an XML document.
*   Construct basic XPath expressions to select elements, attributes, and text content.
*   Utilize common XPath axes and predicates to refine node selection.
*   Understand the hierarchical nature of XML documents as a tree structure for XPath navigation.
*   Apply XPath expressions to locate specific information in scholarly XML texts.

#### Detailed lesson content
Once we have a well-formed and valid XML document, the next crucial step is to be able to access and extract specific pieces of information from it. This is where *XPath* (XML Path Language) becomes indispensable. XPath is a language for addressing parts of an XML document, much like a file path addresses files and directories on a computer. It treats an XML document as a tree structure, where elements, attributes, text, and comments are all considered "nodes." Understanding this tree model is key to mastering XPath: the root of the document is the parent of the root element, elements are parents of their children elements and attributes, and so on. XPath allows us to navigate this tree to select nodes that match certain criteria, making it a powerful tool for querying, transforming, and validating XML data. In digital humanities, XPath is used extensively to find specific passages, count occurrences of particular tags, extract metadata, or prepare data for further analysis, often as a precursor to XSLT transformations or programmatic processing.

The most basic XPath expressions are akin to file paths. A single slash `/` indicates the root of the document (not the root *element*), while a double slash `//` selects nodes anywhere in the document, regardless of their position. For instance, `/book/chapter` would select all `chapter` elements that are direct children of the `book` root element. In contrast, `//paragraph` would select all `paragraph` elements anywhere in the document, whether they are children of a `chapter`, a `section`, or any other element. This distinction between absolute paths (starting with `/`) and relative paths (starting from the current context, or `//` for anywhere) is fundamental. To select attributes, you use the `@` symbol. So, `//person/@id` would select the `id` attribute of every `person` element in the document. To select the text content of an element, you use `text()`. For example, `//title/text()` would retrieve the textual content of all `title` elements.

XPath's power truly emerges with *predicates*, which are filters enclosed in square brackets `[]` that refine your selection. Predicates allow you to specify conditions based on element content, attribute values, or even position. For example, `//chapter[2]` selects the second `chapter` element in the document order. `//person[@gender='female']` selects all `person` elements that have a `gender` attribute with the value "female". You can combine conditions using `and` or `or`: `//person[@gender='male' and @born > 1800]` would select male persons born after 1800. Predicates can also check for the existence of child elements: `//chapter[.//note]` selects `chapter` elements that contain *any* `note` element within them. This ability to filter based on complex criteria makes XPath incredibly versatile for targeted data extraction.

Let's consider a practical scenario with a TEI-encoded manuscript excerpt. Imagine you have an XML file for a historical letter:
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt><title>Letter to John Smith</title></titleStmt>
      <publicationStmt><p>Published by Cohortia Press</p></publicationStmt>
      <sourceDesc>
        <bibl><author>Jane Doe</author><date when="1885-07-14">July 14, 1885</date></bibl>
      </sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <opener><salute>Dear John,</salute></opener>
      <p>I hope this letter finds you well. I have been thinking about our <ref target="#projectA">project on medieval manuscripts</ref>.</p>
      <p>The weather here is quite <hi rend="italic">charming</hi>.</p>
      <closer><signed>Yours, Jane</signed></closer>
    </body>
  </text>
</TEI>
```
Here are some XPath expressions and what they would select:
*   `//title/text()`: Selects "Letter to John Smith"
*   `//author/text()`: Selects "Jane Doe"
*   `//date/@when`: Selects "1885-07-14"
*   `//p[1]`: Selects the first `<p>` element in the `<body>` (the one about the project).
*   `//p[contains(., 'charming')]`: Selects the paragraph containing the word "charming".
*   `//ref/@target`: Selects "#projectA".
*   `//hi/text()`: Selects "charming".

A common mistake for beginners is confusing the root of the document (`/`) with the root element (e.g., `<TEI>`). The single slash `/` refers to the abstract document root *above* the `<TEI>` element. Another pitfall is forgetting that XPath is case-sensitive, just like XML. Also, when dealing with namespaces (like the `xmlns="http://www.tei-c.org/ns/1.0"` in the example above), simple XPath expressions like `//title` might not work directly. You often need to declare a prefix for the namespace and use it in your XPath, e.g., `//tei:title` if `tei` is mapped to the TEI namespace URI. We will delve deeper into namespaces in a later chapter, but it's important to be aware of this complexity. For now, focus on the core syntax and the tree model. XPath is a fundamental skill for anyone working with structured data, and mastering it will significantly enhance your ability to interact with and analyze TEI documents.

#### Key concepts
*   **XPath (XML Path Language):** A query language for selecting nodes or node-sets from an XML document.
*   **Node:** A basic unit in an XML document's tree structure (e.g., element, attribute, text, comment, processing instruction, document root).
*   **Tree Model:** The hierarchical representation of an XML document, with the document root at the top, followed by elements, attributes, and text nodes.
*   **Absolute Path:** An XPath expression starting with `/`, selecting nodes from the root of the document.
*   **Relative Path:** An XPath expression starting from the current context node, or `//` to select nodes anywhere in the document.
*   **Predicate:** A filter enclosed in square brackets `[]` used in XPath to refine node selection based on conditions (e.g., `[position()=1]`, `[@attribute='value']`).
*   **Axes:** Terms in XPath that describe the relationship between the context node and the selected nodes (e.g., `child::`, `parent::`, `ancestor::`, `descendant::`). While often implicit, understanding them helps with complex queries.

#### Hands-on activity
**XPath Query Challenge on a TEI Poem**

Given the following simplified TEI XML for a poem, write XPath expressions to retrieve the specified information.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <text>
    <body>
      <div type="poem" xml:id="ozymandias">
        <head>Ozymandias</head>
        <byline>Percy Bysshe Shelley</byline>
        <lg n="1">
          <l n="1">I met a traveller from an antique land,</l>
          <l n="2">Who said—“Two vast and trunkless legs of stone</l>
          <l n="3">Stand in the desert. . . . Near them, on the sand,</l>
          <l n="4">Half sunk, a shattered visage lies, whose frown,</l>
          <l n="5">And wrinkled lip, and sneer of cold command,</l>
          <l n="6">Tell that its sculptor well those passions read</l>
          <l n="7">Which yet survive, stamped on these lifeless things,</l>
          <l n="8">The hand that mocked them, and the heart that fed;</l>
        </lg>
        <lg n="2">
          <l n="9">And on the pedestal these words appear:</l>
          <l n="10">“My name is Ozymandias, King of Kings;</l>
          <l n="11">Look on my Works, ye Mighty, and despair!”</l>
          <l n="12">Nothing beside remains. Round the decay</l>
          <l n="13">Of that colossal Wreck, boundless and bare</l>
          <l n="14">The lone and level sands stretch far away.</l>
        </lg>
      </div>
    </body>
  </text>
</TEI>
```

**Write XPath expressions to find:**
1.  The text content of the poem's title.
2.  The `n` attribute value of the second `<lg>` (line group) element.
3.  All `<l>` (line) elements that contain the word "sand".
4.  The text content of the `<byline>` element.
5.  The `xml:id` attribute value of the `div` element.

#### Assessment idea
1.  **Question:** Given the following XML snippet:
    ```xml
    <collection>
      <item id="item001" type="painting">
        <title>Starry Night</title>
        <artist>Vincent van Gogh</artist>
      </item>
      <item id="item002" type="sculpture">
        <title>David</title>
        <artist>Michelangelo</artist>
      </item>
      <item id="item003" type="painting">
        <title>Mona Lisa</title>
        <artist>Leonardo da Vinci</artist>
      </item>
    </collection>
    ```
    Write an XPath expression that selects the titles of all items whose `type` attribute is "painting".

    **Model Response:**
    `//item[@type='painting']/title/text()`
    **Explanation:**
    *   `//item` selects all `<item>` elements anywhere in the document.
    *   `[@type='painting']` filters these items, selecting only those where the `type` attribute has the value "painting".
    *   `/title` then selects the `title` child element of the filtered items.
    *   `/text()` extracts the text content of those `title` elements.

2.  **Question:** What is the difference between `/rootElement/childElement` and `//childElement` in XPath? When would you use each?

    **Model Response:**
    *   `/rootElement/childElement`: This is an **absolute path** that starts from the document root and selects `childElement` only if it is a direct child of `rootElement`, which itself must be the root element of the XML document. It specifies a very precise, fixed path.
    *   `//childElement`: This is a **relative path** (specifically, a descendant-or-self axis shortcut) that selects all `childElement` nodes anywhere in the document, regardless of their position in the hierarchy.

    **When to use each:**
    *   Use `/rootElement/childElement` when you need to select a node at a very specific, known position relative to the document's root, ensuring you only get that exact node and not others with the same name elsewhere. For example, to get the main title of a document which is always `/TEI/teiHeader/fileDesc/titleStmt/title`.
    *   Use `//childElement` when you want to find all occurrences of a particular element type anywhere in the document, without needing to know its exact path. For example, to find all `<name>` elements throughout a text, regardless of whether they appear in a paragraph, a list, or a header.

#### AI generation note
Produce a 12-minute interactive video tutorial. Start with an animated visual of an XML document transforming into a tree structure, clearly labeling nodes (elements, attributes, text). Then, demonstrate basic XPath syntax using a split-screen: left side shows a simple XML snippet (e.g., a `<book>` with `<chapter>` and `<paragraph>`), right side shows the XPath expression being typed and the corresponding nodes highlighting in the XML tree. Progress to predicates, showing examples like `[2]`, `[@id='value']`, and `[contains(., 'word')]`. Include a 4-minute guided practice where learners are given an XML snippet and asked to write XPath expressions, with a pause for them to try before revealing the solution. A "common pitfalls" segment should address case-sensitivity and the difference between `/` and `//`. Provide full captions and a downloadable XPath cheat sheet.

### Chapter 2.4 — Transforming XML: An Introduction to XSLT Concepts

#### Learning objectives
*   Explain the role and purpose of XSLT in transforming XML documents into other formats.
*   Understand the fundamental concept of XSLT as a stylesheet language for XML.
*   Identify the core components of an XSLT stylesheet, including templates and match patterns.
*   Describe how XSLT uses XPath to select and process nodes for transformation.
*   Recognize practical applications of XSLT in digital humanities for rendering and data extraction.

#### Detailed lesson content
Once we can structure our data with XML and query it with XPath, the next logical step is to be able to *transform* it. This is the domain of *XSLT* (Extensible Stylesheet Language Transformations). XSLT is a powerful language designed specifically for transforming XML documents into other XML documents, HTML, plain text, or virtually any other format. It acts as a stylesheet, defining rules for how an XML source document should be converted into a result document. For digital humanists, XSLT is an incredibly valuable tool. It allows us to take our richly encoded TEI documents and render them as human-readable web pages (HTML), generate print-ready PDFs (via XSL-FO or LaTeX), extract specific data for statistical analysis (CSV), or even convert them into different XML schemas for interoperability with other systems. This capability is essential for making scholarly editions accessible, reusable, and presentable in various contexts.

At its core, XSLT operates on the principle of *templates* and *matching*. An XSLT stylesheet is itself an XML document, typically with the root element `<xsl:stylesheet>` or `<xsl:transform>`. Within this stylesheet, you define *templates* using the `<xsl:template>` element. Each template has a `match` attribute that contains an XPath expression. When an XSLT processor runs, it traverses the source XML document, looking for nodes that match the XPath expression in a template. When a match is found, the content of that template is applied to generate a portion of the result document. If no specific template matches a node, XSLT has built-in default templates that typically copy text nodes and process child elements, effectively performing an identity transformation unless overridden. This declarative, rule-based approach is quite different from procedural programming and requires a shift in thinking.

Let's illustrate with a simple example. Suppose we have an XML document describing a person: `<person><name>Jane Doe</name><age>30</age></person>`. We want to transform this into an HTML paragraph: `<p>Name: Jane Doe, Age: 30</p>`.
An XSLT stylesheet might look like this:
```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/person">
    <p>
      Name: <xsl:value-of select="name"/>,
      Age: <xsl:value-of select="age"/>
    </p>
  </xsl:template>
</xsl:stylesheet>
```
In this stylesheet:
*   `<xsl:stylesheet>` is the root element.
*   `<xsl:template match="/person">` defines a template that will be applied when the processor encounters the `/person` element (the root element in this simple case).
*   Inside the template, we define the desired output structure, which is an HTML `<p>` tag.
*   `<xsl:value-of select="name"/>` is an XSLT instruction that uses an XPath expression (`name`) to select the content of the `name` child element of the current context node (`person`) and inserts its text value into the output. The same applies to `age`.

This example demonstrates how XSLT combines literal result elements (like `<p>`) with XSLT instructions (like `<xsl:value-of>`) and XPath expressions to construct the output. Other common XSLT instructions include `<xsl:for-each>` for iterating over a set of nodes, `<xsl:if>` for conditional processing, and `<xsl:apply-templates>` for recursively processing child nodes or other nodes matching specific templates. The power of `<xsl:apply-templates>` is particularly important as it enables modular and recursive transformations, allowing you to define how different types of elements should be rendered independently.

A common pitfall for beginners is trying to think procedurally. Instead of "first do this, then do that," XSLT asks "when you see this pattern, what should the output be?" Another challenge is understanding the *context node*: XPath expressions within an XSLT template are evaluated relative to the node that matched the template. If a template matches `/book`, then `chapter` within that template refers to child `chapter` elements of `book`. If you need to refer to something outside the current context, you'd use an absolute XPath or navigate using `../` (parent) or `ancestor::`.

In the context of TEI, XSLT is indispensable. Imagine you have a TEI document with `<persName>` tags for named persons. You might use XSLT to:
1.  Transform `<persName type="historical">...</persName>` into a hyperlink to a biographical database.
2.  Extract all `<placeName>` elements and list them alphabetically for an index.
3.  Render `<p>` elements as HTML paragraphs, `<hi rend="italic">` as `<em>`, and `<note>` elements as footnotes or tooltips.
4.  Generate a plain text version of the document, stripping all markup, for text analysis.

XSLT allows scholars to separate the content (the TEI XML) from its presentation and various analytical views. This separation is a cornerstone of digital scholarly editing, ensuring that the rich semantic encoding of the text is preserved independently of any specific output format. Mastering XSLT opens up a vast array of possibilities for publishing, analyzing, and repurposing your TEI-encoded data.

#### Key concepts
*   **XSLT (Extensible Stylesheet Language Transformations):** A language for transforming XML documents into other XML documents, HTML, or other formats.
*   **Stylesheet:** An XSLT document that contains transformation rules (templates) for a source XML document.
*   **Template:** A rule within an XSLT stylesheet that defines how a specific pattern of nodes in the source XML should be transformed into the result.
*   **Match Pattern:** An XPath expression within an `<xsl:template>`'s `match` attribute that specifies which nodes the template should apply to.
*   **`xsl:value-of`:** An XSLT instruction that selects the string value of a node (or set of nodes) using an XPath expression and inserts it into the result tree.
*   **`xsl:for-each`:** An XSLT instruction that iterates over a set of selected nodes, applying its content to each node in the set.
*   **`xsl:apply-templates`:** An XSLT instruction that processes the children of the current node, or a specified set of nodes, by finding and applying the most appropriate template for each.

#### Hands-on activity
**Simple XSLT Transformation for a Letter**

You have a simple XML document representing a letter. Your task is to write an XSLT stylesheet to transform it into a basic HTML page.

**Source XML (`letter.xml`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<letter>
  <from>Dr. Emily Carter</from>
  <to>Mr. Arthur Jenkins</to>
  <date when="1923-11-05">November 5, 1923</date>
  <salutation>Dear Mr. Jenkins,</salutation>
  <p>I am writing to confirm our meeting next Tuesday regarding the archival project.</p>
  <p>Please bring the documents we discussed.</p>
  <closing>Sincerely,</closing>
  <signature>Dr. Emily Carter</signature>
</letter>
```

**Desired HTML Output:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Letter from Dr. Emily Carter</title>
</head>
<body>
  <h1>Letter</h1>
  <p><strong>From:</strong> Dr. Emily Carter</p>
  <p><strong>To:</strong> Mr. Arthur Jenkins</p>
  <p><strong>Date:</strong> November 5, 1923</p>
  <p>Dear Mr. Jenkins,</p>
  <p>I am writing to confirm our meeting next Tuesday regarding the archival project.</p>
  <p>Please bring the documents we discussed.</p>
  <p>Sincerely,</p>
  <p>Dr. Emily Carter</p>
</body>
</html>
```

**Instructions:**
1.  Create a new file named `letter_to_html.xsl`.
2.  Start with the basic XSLT stylesheet structure.
3.  Create a template that matches the root `/` of the XML document to generate the overall HTML structure (`<html>`, `<head>`, `<body>`).
4.  Inside the `<body>`, use `<xsl:value-of>` to extract content from the `<from>`, `<to>`, `<date>`, `<salutation>`, `<closing>`, and `<signature>` elements, wrapping them in appropriate HTML tags (e.g., `<p>`, `<strong>`).
5.  Use `<xsl:apply-templates select="p"/>` within the `<body>` to process all `<p>` elements.
6.  Create a separate template that matches `p` elements to transform them into HTML `<p>` tags.

#### Assessment idea
1.  **Question:** You have a TEI XML document with multiple `<persName type="fictional">` elements. You want to transform this document into an HTML page where these fictional names are displayed in *italics*. Write the XSLT template that would achieve this.

    **Model Response:**
    ```xml
    <xsl:template match="persName[@type='fictional']">
      <i><xsl:apply-templates/></i>
    </xsl:template>
    ```
    **Explanation:**
    *   `match="persName[@type='fictional']"` targets only `<persName>` elements that have a `type` attribute with the value "fictional".
    *   `<i>...</i>` creates an HTML italic tag in the output.
    *   `<xsl:apply-templates/>` ensures that any content *within* the `<persName>` element (e.g., the actual name text) is copied into the `<i>` tag.

2.  **Question:** Describe a scenario in digital humanities where XSLT would be particularly useful, and explain *why* it's a good tool for that scenario.

    **Model Response:**
    **Scenario:** A digital humanities project has a collection of historical letters encoded in TEI XML, and the project team wants to publish these letters online as a browsable website, as well as generate a separate CSV file containing metadata (sender, recipient, date) for quantitative analysis.

    **Why XSLT is useful:**
    XSLT is ideal for this scenario because it allows for the **separation of content from presentation and analysis**.
    *   **For the website:** An XSLT stylesheet can transform the TEI XML into HTML. It can map TEI elements like `<opener>`, `<p>`, `<closer>`, `<salute>`, `<dateline>`, and `<signed>` to corresponding HTML elements (`<div>`, `<p>`, etc.), and even add navigation or styling. This ensures the rich semantic encoding in TEI is preserved in the source XML, while the web presentation is handled by a separate transformation layer.
    *   **For the CSV metadata:** A different XSLT stylesheet can be written to extract specific elements and attributes (e.g., `<from>`, `<to>`, `<date when="...">`) from each letter and format them as comma-separated values. This allows for data extraction for analysis without altering the original TEI document.

    This demonstrates XSLT's ability to generate multiple, distinct outputs from a single source XML document, addressing different use cases (publication and data analysis) efficiently and consistently.

#### AI generation note
Develop a 12-minute video tutorial focusing on the "input-process-output" model of XSLT. Start with an animation showing a source XML document entering an "XSLT machine" and exiting as an HTML page. Explain templates using a visual metaphor like "recipes" for different XML "ingredients." Use a split-screen demonstration: on the left, show a simple XML snippet (e.g., a `<book>` with `<title>` and `<author>`); on the right, build an XSLT stylesheet step-by-step, showing how `<xsl:template match="book">` and `<xsl:value-of select="title"/>` work, with the resulting HTML appearing dynamically below. Emphasize the role of XPath within XSLT. Include a segment on common XSLT instructions like `xsl:for-each` and `xsl:apply-templates` with clear, concise examples. End with a 3-minute interactive coding challenge where learners complete a partially written XSLT template to transform a `<chapter>` element into an `<h2>` heading. Provide full captions and a downloadable XSLT quick reference guide.

### Chapter 2.5 — XML Namespaces and Their Role in TEI

#### Learning objectives
*   Explain the problem that XML namespaces are designed to solve.
*   Define what an XML namespace is and how it is declared in an XML document.
*   Differentiate between a namespace URI and a namespace prefix.
*   Understand the concept of a default namespace and how it applies to elements.
*   Recognize the critical role of namespaces in enabling modularity and extensibility within the TEI framework.

#### Detailed lesson content
As XML documents grow in complexity and as different XML vocabularies are combined, a significant problem can arise: *name collisions*. Imagine you have an XML document describing a book, which uses a `<title>` element for the book's title. Now, imagine you want to embed a vector graphic (SVG) within this XML, and SVG also uses a `<title>` element, but for the title of the graphic. If both use the same tag name, how does an XML parser or processing application know which `<title>` you mean? This ambiguity can lead to incorrect processing or validation errors. This is precisely the problem that *XML Namespaces* are designed to solve. Namespaces provide a mechanism to qualify element and attribute names by associating them with a unique identifier, thereby avoiding name collisions and allowing elements from different XML vocabularies to coexist harmoniously within a single document. This concept is absolutely crucial for TEI, which is designed to be highly modular and extensible, often incorporating elements from other standards or allowing users to define their own.

An XML namespace is declared using the `xmlns` attribute, either on the root element or any element where the namespace needs to be introduced. The value of this attribute is a *Uniform Resource Identifier (URI)*, which acts as a unique name for the namespace. Importantly, this URI is merely an identifier; it doesn't necessarily point to a web page or a schema file, though it often does by convention. There are two ways to declare a namespace:
1.  **Default Namespace:** Declared with `xmlns="http://example.com/ns/book"`. When a default namespace is declared on an element, all unqualified child elements (those without a prefix) within that element are considered to belong to that namespace.
2.  **Prefixed Namespace:** Declared with `xmlns:prefix="http://example.com/ns/svg"`. Here, `prefix` is an arbitrary short string (like `svg` or `tei`) that you associate with the namespace URI. Any element or attribute qualified with this prefix (e.g., `<svg:title>`) belongs to the namespace identified by that URI.

Consider this example:
```xml
<book xmlns="http://example.com/ns/book">
  <title>My Awesome Book</title>
  <chapter>
    <title>Introduction</title>
    <svg:svg xmlns:svg="http://www.w3.org/2000/svg" width="100" height="100">
      <svg:title>A Simple Circle</svg:title>
      <svg:circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="red"/>
    </svg:svg>
  </chapter>
</book>
```
In this snippet:
*   The `<book>` element and its children `<title>` and `<chapter>` (including `<chapter>`'s child `<title>`) belong to the `http://example.com/ns/book` namespace because it's declared as the default namespace on `<book>`.
*   The `<svg:svg>`, `<svg:title>`, and `<svg:circle>` elements belong to the `http://www.w3.org/2000/svg` namespace, explicitly identified by the `svg` prefix. Notice how the `svg` prefix is associated with its URI *within* the `<svg:svg>` element itself, making it locally scoped. This prevents the `svg` prefix from affecting elements outside the SVG block.

The distinction between the namespace URI and the prefix is critical. The URI is the actual, unique identifier for the namespace. The prefix is merely a local shorthand used within the document; you could choose any prefix (e.g., `s`, `graphics`, `mySvg`) as long as it's consistently mapped to the correct URI. XML parsers and processors always use the URI for identification, not the prefix.

The Text Encoding Initiative (TEI) makes extensive use of namespaces. The primary TEI namespace URI is `http://www.tei-c.org/ns/1.0`. Almost all TEI elements belong to this namespace. When you see a TEI document, it typically starts with:
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <!-- ... TEI content ... -->
</TEI>
```
Here, `http://www.tei-c.org/ns/1.0` is declared as the *default namespace*. This means that all elements within the `<TEI>` element that do not have a prefix (like `<teiHeader>`, `<text>`, `<p>`, `<name>`) are implicitly understood to belong to the TEI namespace. This simplifies the markup, as you don't have to prefix every single TEI element.

However, TEI also allows for the inclusion of elements from other namespaces. For instance, if you wanted to embed a MathML equation or an SVG graphic within your TEI text, you would declare their respective namespaces with prefixes:
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0"
     xmlns:mml="http://www.w3.org/1998/Math/MathML"
     xmlns:svg="http://www.w3.org/2000/svg">
  <text>
    <body>
      <p>Here is some text with an equation:</p>
      <mml:math>
        <mml:mi>x</mml:mi>
        <mml:mo>+</mml:mo>
        <mml:mi>y</mml:mi>
      </mml:math>
      <p>And here is a small diagram:</p>
      <svg:svg width="50" height="50">
        <svg:rect x="0" y="0" width="50" height="50" fill="blue"/>
      </svg:svg>
    </body>
  </text>
</TEI>
```
This demonstrates TEI's modularity. By using namespaces, TEI documents can seamlessly integrate content from other XML vocabularies without any ambiguity. This is crucial for complex digital editions that might combine textual content with mathematical formulas, scientific diagrams, or even geographical data. A common mistake is to think the prefix *is* the namespace; always remember the URI is the true identifier. Another pitfall is forgetting that attributes, by default, do not belong to the default namespace; they only belong to a namespace if they are explicitly prefixed (e.g., `xml:id` where `xml` is a predefined namespace). Understanding namespaces is not just a technical detail; it's a fundamental concept that underpins the extensibility and interoperability of modern XML standards like TEI, allowing scholars to build rich, interconnected digital resources.

#### Key concepts
*   **XML Namespace:** A mechanism to qualify element and attribute names in XML documents by associating them with a unique URI, preventing name collisions.
*   **Namespace URI:** A Uniform Resource Identifier (e.g., `http://www.tei-c.org/ns/1.0`) that uniquely identifies a namespace. It is the actual name of the namespace.
*   **Namespace Prefix:** A short, arbitrary string (e.g., `tei`, `svg`, `mml`) used in an XML document to refer to a namespace URI.
*   **Default Namespace:** A namespace declared without a prefix (e.g., `xmlns="URI"`). All unqualified elements within the scope of this declaration belong to the default namespace.
*   **Qualified Name:** An element or attribute name that includes a namespace prefix (e.g., `svg:circle`) or implicitly belongs to a default namespace.
*   **Name Collision:** The problem that arises when different XML vocabularies use the same element or attribute names for different purposes.

#### Hands-on activity
**Identifying Namespaces in a Mixed XML Document**

You are given an XML document that combines elements from a custom "library" namespace with elements from the TEI namespace. Your task is to identify which elements belong to which namespace and explain why.

**XML Document:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<library:catalog xmlns:library="http://example.org/ns/library"
                 xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt><title>Mixed Catalog Example</title></titleStmt>
    </fileDesc>
  </teiHeader>
  <library:book id="book001">
    <library:title>The Digital Humanities Handbook</library:title>
    <library:author>Susan Schreibman</library:author>
    <text>
      <body>
        <p>This book discusses various aspects of digital humanities, including <hi rend="bold">TEI</hi>.</p>
      </body>
    </text>
  </library:book>
  <library:book id="book002">
    <library:title>XML for Dummies</library:title>
    <library:author>Frank P. Miller</library:author>
  </library:book>
</library:catalog>
```

**Questions for analysis:**
1.  What is the default namespace declared in this document, and which elements belong to it?
2.  What is the prefixed namespace declared, what is its prefix, and which elements belong to it?
3.  Why is the `<title>` element inside `<teiHeader>` considered part of the TEI namespace, while the `<library:title>` element inside `<library:book>` is part of the `library` namespace, even though both are named "title"?

#### Assessment idea
1.  **Question:** You are creating an XML document that needs to include both standard HTML elements (like `<div>` and `<p>`) and custom elements for a "product" catalog (like `<product>` and `<price>`). How would you use namespaces to ensure there are no name collisions, especially if your custom catalog also happens to use a `<title>` element, and HTML also has a `<title>` element (in the `<head>`)? Provide a minimal XML snippet demonstrating your approach.

    **Model Response:**
    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <html xmlns="http://www.w3.org/1999/xhtml"
          xmlns:cat="http://example.com/ns/catalog">
      <head>
        <title>My Mixed Document</title>
      </head>
      <body>
        <div>
          <p>Here is some HTML content.</p>
          <cat:product id="p001">
            <cat:title>Super Widget</cat:title>
            <cat:price>19.99</cat:price>
          </cat:product>
        </div>
      </body>
    </html>
    ```
    **Explanation:**
    *   `xmlns="http://www.w3.org/1999/xhtml"` declares the XHTML namespace as the default. This means all unqualified elements like `<html>`, `<head>`, `<title>` (in the head), `<body>`, `<div>`, and `<p>` belong to the XHTML namespace.
    *   `xmlns:cat="http://example.com/ns/catalog"` declares a prefixed namespace for the custom catalog elements.
    *   Elements like `<cat:product>`, `<cat:title>`, and `<cat:price>` are explicitly qualified with the `cat` prefix, clearly indicating they belong to the custom catalog namespace.
    *   This prevents collision between the HTML `<title>` (for the document's head) and the catalog's `<cat:title>` (for a product's title), as they belong to distinct namespaces.

2.  **Question:** What is the difference between a namespace URI and a namespace prefix, and why is this distinction important for XML processing?

    **Model Response:**
    *   **Namespace URI (Uniform Resource Identifier):** This is the actual, unique identifier for a namespace (e.g., `http://www.tei-c.org/ns/1.0`). It's a string that acts as the formal name of the vocabulary.
    *   **Namespace Prefix:** This is a short, local alias or shorthand (e.g., `tei`, `svg`, `mml`) that is associated with a namespace URI within a specific XML document. It's used to qualify element and attribute names to indicate which namespace they belong to.

    **Importance for XML Processing:**
    The distinction is crucial because **XML processors (like parsers, XSLT engines, or validation tools) identify namespaces by their URIs, not by their prefixes.**
    *   The prefix is merely a convenience for human readability and for writing the XML document. It can be changed without affecting the meaning of the XML, as long as it's consistently re-mapped to the same URI.
    *   The URI, being unique and immutable, is what truly disambiguates element and attribute names. This ensures that software can correctly interpret elements from different vocabularies, even if those vocabularies happen to use the same local names (e.g., knowing that `<title>` from `http://www.tei-c.org/ns/1.0` is different from `<title>` from `http://www.w3.org/2000/svg`). This guarantees interoperability and avoids ambiguity when combining or processing XML data from multiple sources.

#### AI generation note
Create a 10-minute video lecture with animated diagrams. Begin by illustrating the "name collision" problem using two `<title>` elements from different conceptual domains (e.g., a book title and a car model title) without namespaces. Then, introduce the concept of a namespace URI as a unique identifier, using a visual metaphor like a "passport" for a vocabulary. Show how to declare default and prefixed namespaces, demonstrating the syntax `xmlns="..."` and `xmlns:prefix="..."`. Use color-coding to highlight which elements belong to which namespace in a mixed XML document (e.g., TEI and SVG). Dedicate a segment to TEI's use of a default namespace for its core elements and prefixed namespaces for incorporating external vocabularies. Include a 2-question interactive drag-and-drop exercise where learners match elements to their correct namespace URI based on an XML snippet. Provide full captions and a downloadable guide to common XML namespaces (TEI, XHTML, SVG, MathML).

---

## Module 3: Core TEI Structure: The `teiHeader` and Basic Text Elements

This module introduces the foundational elements of a TEI document, focusing on the essential metadata contained within the `teiHeader` and the initial steps of structuring the textual body. You will learn how to describe your digital edition and its source materials comprehensively, making your scholarly work discoverable, reusable, and transparent. We will then transition to marking up the core text, beginning with hierarchical divisions and basic prose elements.

### Chapter 3.1 — Introduction to the `teiHeader`: Metadata for Scholarly Editions

#### Learning objectives
*   Explain the purpose and critical role of the `teiHeader` in a TEI document.
*   Identify the four main required components of the `teiHeader`: `<fileDesc>`, `<encodingDesc>`, `<profileDesc>`, and `<revisionDesc>`.
*   Construct a basic `<fileDesc>` with essential elements like `<titleStmt>`, `<publicationStmt>`, and `<sourceDesc>`.
*   Articulate why robust metadata is indispensable for the longevity, discoverability, and scholarly integrity of digital editions.

#### Detailed lesson content
The `teiHeader` is arguably the most crucial component of any TEI document, serving as its metadata wrapper. While the `<body>` element contains the actual text you are encoding, the `teiHeader` provides all the contextual information necessary to understand, evaluate, and reuse that text. Think of it as the scholarly apparatus that accompanies a print edition, but in a machine-readable, standardized format. Without a properly constructed `teiHeader`, your encoded text is largely decontextualized, making it difficult for other scholars, researchers, or even future versions of yourself to understand its origins, editorial principles, or how to cite it. This is a fundamental principle of digital humanities: data without metadata is often unusable data.

The TEI Guidelines mandate four main top-level elements within the `teiHeader`: `<fileDesc>` (file description), `<encodingDesc>` (encoding description), `<profileDesc>` (profile description), and `<revisionDesc>` (revision description). While all are important, we will begin our exploration with the `<fileDesc>`, as it contains the most immediate and essential information about the digital file itself and the source text it represents. The `<fileDesc>` is where you declare the title of your digital edition, who created it, where and when it was published, and most importantly, what source text(s) it is based upon. This is the "who, what, when, and where" of your digital scholarship.

Within the `<fileDesc>`, several key elements are typically employed. The `<titleStmt>` (title statement) is mandatory and contains the title of the digital edition (`<title>`) and information about its creators, such as authors (`<author>`), editors (`<editor>`), and other contributors (`<respStmt>`). For instance, if you are creating a digital edition of Shakespeare's *Hamlet*, your `<title>` might be "A Digital Critical Edition of William Shakespeare's Hamlet." The `<respStmt>` element is particularly useful for detailing responsibilities beyond simple authorship, allowing you to specify who transcribed the text, who encoded it, who designed the schema, and so forth. This ensures proper attribution in collaborative digital projects. A common pitfall here is to only include the primary editor, overlooking the significant contributions of transcribers, student assistants, or technical developers. Remember, digital humanities projects are often highly collaborative, and the `teiHeader` is the place to acknowledge every hand involved.

Following the `<titleStmt>`, the `<publicationStmt>` (publication statement) describes the publication of the electronic text. This includes information about the publisher (`<publisher>`), the place of publication (`<pubPlace>`), the date of publication (`<date>`), and any availability statements (`<availability>`). The `<availability>` element is crucial for specifying licensing information (e.g., Creative Commons licenses), access restrictions, or terms of use, thereby promoting open scholarship and responsible data sharing. For example, you might state that the text is "Available under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License." This directly addresses the "standards" skill by adhering to recognized intellectual property frameworks.

Finally, and perhaps most critically for scholarly transparency, the `<sourceDesc>` (source description) provides a full bibliographic description of the source text(s) from which the electronic text was derived. This could be a manuscript, a printed book, or even another digital edition. The level of detail here is paramount. For a print source, you might use a `<bibl>` (bibliographic citation) element, while for a manuscript, you would typically use a `<msDesc>` (manuscript description), which we will explore in depth in the next chapter. The purpose of `<sourceDesc>` is to allow any user of your digital edition to trace your work back to its original source, verifying your transcription and editorial choices. A common mistake is to provide only a minimal citation, making it difficult for others to locate the exact edition or manuscript you used. For example, simply stating "Shakespeare, *Hamlet*" is insufficient; a proper `<sourceDesc>` would specify the publisher, year, edition, and even page numbers if relevant, or the manuscript siglum, repository, and shelfmark. This level of precision is fundamental to scholarly editing and the "scholarly editing" skill outlined in the course metadata. The `teiHeader` thus acts as a robust, machine-readable scholarly apparatus, ensuring that your digital edition is not just a collection of text, but a fully contextualized and verifiable piece of scholarship.

#### Key concepts
*   **`teiHeader`**: The mandatory metadata section of a TEI document, providing contextual information about the digital edition and its source.
*   **`<fileDesc>`**: (File Description) A required element within the `teiHeader` that describes the electronic file itself and the source from which it was derived.
*   **`<titleStmt>`**: (Title Statement) A required element within `<fileDesc>` containing the title of the digital edition, authors, editors, and other contributors.
*   **`<publicationStmt>`**: (Publication Statement) A required element within `<fileDesc>` detailing the publication of the electronic text, including publisher, place, date, and availability.
*   **`<sourceDesc>`**: (Source Description) A required element within `<fileDesc>` that provides a full bibliographic description of the source text(s) used for the digital edition.
*   **Metadata**: Data about data; information that describes the content, quality, condition, origin, and other characteristics of data. Essential for discoverability and reuse.

#### Hands-on activity
**Activity: Constructing Your First `teiHeader`**

Imagine you are creating a digital edition of a public domain text, perhaps a short story or a poem. For this exercise, choose a short text (e.g., Edgar Allan Poe's "The Raven" or a chapter from Jane Austen's *Pride and Prejudice*).

Your task is to create a basic `teiHeader` for your hypothetical digital edition. Focus on the `<fileDesc>` and include the following elements:
1.  **`<titleStmt>`**:
    *   A `<title>` for your digital edition (e.g., "A Digital Edition of [Your Chosen Text]").
    *   An `<editor>` element with your name.
    *   A `<respStmt>` acknowledging a hypothetical transcriber (e.g., "Jane Doe") and their role.
2.  **`<publicationStmt>`**:
    *   A `<publisher>` (e.g., "Cohortia Digital Editions").
    *   A `<pubPlace>` (e.g., "Internet").
    *   A `<date>` for today's date.
    *   An `<availability>` statement indicating the text is "Freely available under a Creative Commons Attribution 4.0 International License."
3.  **`<sourceDesc>`**:
    *   A `<bibl>` element providing a full bibliographic citation for the print edition you are hypothetically working from. Include author, title, publisher, year, and city of publication.

Use a plain text editor or an XML editor to write out your TEI header. Pay close attention to proper XML syntax (opening and closing tags, attributes).

```xml
<teiHeader>
  <fileDesc>
    <titleStmt>
      <title>...</title>
      <editor>...</editor>
      <respStmt>
        <resp>Transcription by</resp>
        <name>...</name>
      </respStmt>
    </titleStmt>
    <publicationStmt>
      <publisher>...</publisher>
      <pubPlace>...</pubPlace>
      <date>...</date>
      <availability>
        <p>...</p>
      </availability>
    </publicationStmt>
    <sourceDesc>
      <bibl>...</bibl>
    </sourceDesc>
  </fileDesc>
  <!-- Placeholder for other required elements, to be filled in later modules -->
  <encodingDesc/>
  <profileDesc/>
  <revisionDesc/>
</teiHeader>
```

#### Assessment idea
1.  **Question:** Explain the primary scholarly purpose of the `teiHeader` in the context of digital humanities and scholarly editing. Why is it considered essential, and what are the risks of omitting or poorly constructing it?
    *   **Model Response:** The `teiHeader` serves as the comprehensive metadata container for a TEI digital edition. Its primary scholarly purpose is to provide crucial contextual information about the digital file itself, its creation, and its source materials, making the edition discoverable, interpretable, and reusable by other scholars. It ensures transparency by documenting editorial decisions, attribution, publication details, and the provenance of the text. Omitting or poorly constructing the `teiHeader` carries significant risks: the digital text becomes decontextualized, making it difficult for users to understand its reliability, scope, or how to cite it properly. This hinders scholarly verification, limits discoverability in digital repositories, and impedes the long-term preservation and reuse of the encoded data, ultimately undermining the integrity and impact of the digital scholarship.

2.  **Question:** You are encoding a 19th-century novel. Which specific elements within the `<fileDesc>` would you use to declare the title of your *digital edition*, the *publisher of the digital edition*, and the *original print edition* you are working from? Provide a brief example for each.
    *   **Model Response:**
        *   To declare the title of the *digital edition*, I would use the `<title>` element within the `<titleStmt>`.
            *   Example: `<title>A Scholarly Digital Edition of Mary Shelley's Frankenstein</title>`
        *   To declare the *publisher of the digital edition*, I would use the `<publisher>` element within the `<publicationStmt>`.
            *   Example: `<publisher>University of Digital Humanities Press</publisher>`
        *   To declare the *original print edition* you are working from, I would use the `<bibl>` element within the `<sourceDesc>`.
            *   Example: `<bibl>Shelley, Mary. *Frankenstein; or, The Modern Prometheus*. London: Lackington, Hughes, Harding, Mavor &amp; Jones, 1818.</bibl>`

#### AI generation note
Create a 10-minute video lecture with a split-screen view. On the left, display a live XML editor showing the gradual construction of a `teiHeader` example. On the right, feature the instructor explaining each element's purpose and scholarly significance. Use animated overlays to highlight specific tags as they are discussed. Include a segment demonstrating common errors like missing closing tags or insufficient detail in `<sourceDesc>`, and how to correct them. The interactive element will be a short drag-and-drop exercise where learners match `teiHeader` elements to their definitions. Ensure full captions and a downloadable XML template.

### Chapter 3.2 — Describing the Source: Deep Dive into `<sourceDesc>`

#### Learning objectives
*   Differentiate between various types of source descriptions, including manuscripts, printed books, and digital sources, within `<sourceDesc>`.
*   Utilize the `<bibl>` and `<biblStruct>` elements for structured bibliographic citations of printed works.
*   Employ the `<msDesc>` element and its sub-components (e.g., `<msIdentifier>`, `<physDesc>`, `<history>`) to provide detailed descriptions of manuscript sources.
*   Understand the importance of precise provenance and physical description in scholarly editing, particularly for unique or rare source materials.

#### Detailed lesson content
The `<sourceDesc>` element, nestled within the `<fileDesc>`, is where the scholarly rubber meets the road. It provides the essential link between your digital edition and the physical or digital artifact it represents. The level of detail you provide here directly impacts the credibility and utility of your work. As an encoder, you are not just transcribing text; you are also documenting its material history. This is particularly crucial in scholarly editing, where the physical characteristics of a source (e.g., paper quality, binding, marginalia, scribal hands) can profoundly influence textual interpretation.

For printed sources, the simplest approach is often the `<bibl>` element, which holds a free-form bibliographic citation. However, for more structured and machine-readable citations, the TEI offers `<biblStruct>`. This element allows you to break down a citation into its constituent parts: `<monogr>` (for monographs like books), `<series>` (for series information), `<imprint>` (for publication details), and `<idno>` (for identifiers like ISBNs or DOIs). Within `<monogr>`, you can specify `<author>`, `<title>`, `<editor>`, `<imprint>` (which in turn contains `<pubPlace>`, `<publisher>`, `<date>`), and `<extent>` (for page count). Using `<biblStruct>` ensures that each piece of bibliographic information is explicitly tagged, making it easier for automated tools to parse and display the citation, and aligning with the "standards" skill by promoting interoperability.

Consider this example for a print edition of a novel:
```xml
<biblStruct>
  <monogr>
    <author>Austen, Jane</author>
    <title>Pride and Prejudice</title>
    <imprint>
      <pubPlace>London</pubPlace>
      <publisher>T. Egerton</publisher>
      <date>1813</date>
    </imprint>
    <extent>3 vols.</extent>
  </monogr>
</biblStruct>
```
This structured approach provides far more semantic richness than a simple string of text in a `<bibl>` element.

When dealing with manuscript sources, the complexity—and the scholarly opportunity—increases significantly. Manuscripts are unique artifacts, and their physical characteristics, history, and current location are vital for any serious textual study. For these, the TEI provides the `<msDesc>` (manuscript description) element, which is a powerful tool for detailing every aspect of a manuscript. The `<msDesc>` is divided into several logical sections:
*   **`<msIdentifier>`**: This is where you identify the manuscript uniquely. It typically includes `<country>`, `<settlement>` (city), `<repository>` (library/archive), `<collection>`, and most importantly, `<idno>` (shelfmark or call number). This information is critical for locating the physical manuscript.
*   **`<msContents>`**: Describes the contents of the manuscript, including individual works (`<msItem>`) and their authors.
*   **`<physDesc>`**: (Physical Description) This is a rich section for describing the physical attributes of the manuscript. It can include `<objectDesc>` (description of the object itself, e.g., `<supportDesc>` for material like parchment or paper, `<extent>` for dimensions and folio count, `<layoutDesc>` for layout details), `<handDesc>` (description of scribal hands), `<decoDesc>` (decoration), `<binding>` (binding description), and `<condition>` (physical condition). This is where you document the material evidence that informs your textual decisions. For instance, a change in hand might indicate a new scribe or a later interpolation, which is crucial for establishing textual authority.
*   **`<history>`**: Details the provenance of the manuscript, including its ownership history (`<provenance>`) and any significant dates or events related to its creation or transmission (`<origin>`). Understanding who owned a manuscript and how it moved through history can shed light on its context and potential alterations.

A common mistake when describing manuscripts is to focus solely on the textual content, neglecting the physical artifact. However, in manuscript studies, the medium is often part of the message. For example, if you are encoding a medieval manuscript, describing the type of parchment, the ruling patterns, the presence of illuminations, or evidence of erasures and palimpsests within `<physDesc>` is not just good practice; it's fundamental to understanding the text's production and reception. The "scholarly editing" skill demands this level of meticulousness. By providing such granular detail in `<sourceDesc>`, you empower other scholars to assess your work, compare it with other editions, and even contribute to a larger ecosystem of digital manuscript studies, fostering interoperability and adherence to digital humanities standards.

#### Key concepts
*   **`<sourceDesc>`**: The element within `<fileDesc>` that provides a full bibliographic description of the source text(s) from which the electronic text was derived.
*   **`<bibl>`**: A general element for a bibliographic citation, often used for unstructured citations or when less detail is required.
*   **`<biblStruct>`**: A structured bibliographic citation element, allowing for granular tagging of components like author, title, publisher, and date.
*   **`<monogr>`**: (Monograph) Used within `<biblStruct>` to describe a single-volume publication or a complete work.
*   **`<msDesc>`**: (Manuscript Description) A comprehensive element used to describe a manuscript source, including its identifier, contents, physical characteristics, and history.
*   **`<msIdentifier>`**: Identifies a manuscript uniquely by its location (country, settlement, repository) and shelfmark.
*   **`<physDesc>`**: (Physical Description) Describes the physical characteristics of a manuscript, such as support material, extent, layout, hands, decoration, and binding.
*   **`<history>`**: Details the provenance and origin of a manuscript.

#### Hands-on activity
**Activity: Describing a Complex Source**

Choose one of the following scenarios and construct a detailed `<sourceDesc>` using the appropriate TEI elements:

**Scenario A: A Printed Book**
You are encoding the first edition of Charles Darwin's *On the Origin of Species*.
*   **Author:** Charles Darwin
*   **Title:** On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life
*   **Publisher:** John Murray
*   **Place of Publication:** London
*   **Date:** 1859
*   **Extent:** ix, 502 pages.
*   **ISBN:** (Hypothetical, as first editions didn't have ISBNs, but for practice, use "978-0199535928")

**Scenario B: A Manuscript**
You are encoding a single folio from the Beowulf manuscript (Cotton Vitellius A.XV).
*   **Country:** United Kingdom
*   **Settlement:** London
*   **Repository:** British Library
*   **Collection:** Cotton MS Vitellius A.XV
*   **ID No.:** f. 132r (or any specific folio you wish to focus on)
*   **Support:** Parchment
*   **Extent:** 1 folio (approx. 245 x 185 mm)
*   **Layout:** Single column, 20 lines per page.
*   **Hand:** Two main scribes (Scribe A and Scribe B), with Scribe B responsible for this folio.
*   **Condition:** Damaged by fire, edges burnt and text lost, now mounted.
*   **Origin:** Late 10th or early 11th century, likely Winchester.

For Scenario A, use `<biblStruct>`. For Scenario B, use `<msDesc>`. Pay attention to nesting elements correctly.

#### Assessment idea
1.  **Question:** You are encoding a newly discovered medieval manuscript fragment containing previously unknown poetry. Beyond simply transcribing the text, why is it critically important to provide a highly detailed `<physDesc>` within your `<sourceDesc>`? What specific types of information would you prioritize, and how might this information impact scholarly interpretation of the text?
    *   **Model Response:** For a newly discovered medieval manuscript fragment, a highly detailed `<physDesc>` is critically important because the physical characteristics of the artifact are often integral to understanding the text itself. Manuscripts are unique, and their material form can provide evidence about their creation, transmission, and meaning. I would prioritize information such as:
        *   **`<supportDesc>` (material, extent, dimensions):** Describing whether it's parchment or paper, its size, and the number of folios can help date the fragment, determine its original context (e.g., part of a larger codex or a standalone piece), and infer its intended use.
        *   **`<layoutDesc>` (layout, ruling, number of lines):** Details about how the text is arranged on the page can reveal scribal practices, regional styles, and even the intended audience or genre.
        *   **`<handDesc>` (scribal hands):** Identifying the number of scribes and their characteristics is crucial for establishing textual authority, identifying potential interpolations, or linking the fragment to known scribal workshops.
        *   **`<decoDesc>` (decoration, illumination):** The presence and style of decoration can provide clues about the manuscript's origin, patronage, and artistic context.
        *   **`<condition>` (damage, repairs):** Documenting fire damage, water stains, or previous repairs can explain textual lacunae or alterations, informing decisions about textual reconstruction.
        This information impacts scholarly interpretation by allowing researchers to assess the fragment's authenticity, date it more accurately, understand its production context, evaluate the reliability of the text, and potentially reconstruct missing portions based on physical evidence. It moves beyond mere transcription to a holistic understanding of the text as a material artifact.

2.  **Question:** Compare and contrast the use of `<bibl>` and `<biblStruct>` for describing a printed source within `<sourceDesc>`. When would you choose one over the other, and what are the advantages of using the more structured option?
    *   **Model Response:**
        *   **`<bibl>`** is a general-purpose element for a bibliographic citation. It typically contains a free-form string of text that represents a complete citation, similar to what you might find in a bibliography. It's simpler to use when the exact semantic breakdown of the citation components isn't crucial, or when dealing with highly variable or non-standard citation formats.
        *   **`<biblStruct>`** is a highly structured element designed to break down a bibliographic citation into its constituent, semantically tagged parts (e.g., `<author>`, `<title>`, `<publisher>`, `<date>`).
        *   **When to choose:** You would choose `<bibl>` for quick, less formal citations, or when the source material itself doesn't lend itself to a rigid structure. You would choose `<biblStruct>` when precision, machine-readability, and interoperability are paramount, especially for scholarly editions where the exact details of the source are critical for verification and reuse.
        *   **Advantages of `<biblStruct>`:**
            1.  **Machine Readability:** Individual components (author, title, date) are explicitly tagged, allowing software to easily parse, extract, and manipulate the data (e.g., generating bibliographies in different styles, creating indexes).
            2.  **Semantic Richness:** It provides a deeper semantic understanding of the citation, distinguishing between the author's name and the title of the work, for example, rather than treating them as a single string.
            3.  **Interoperability:** Facilitates data exchange with other bibliographic databases and tools, adhering to "standards" for scholarly data.
            4.  **Consistency:** Encourages consistent citation practices across a project or larger corpus.
            5.  **Searchability:** Allows for more precise searching and filtering of source descriptions based on specific criteria.

#### AI generation note
Create a 12-minute interactive reading walkthrough. Display an XML editor on the left with a partially completed `<sourceDesc>` for a hypothetical manuscript. The instructor's voiceover guides learners through adding elements like `<msIdentifier>`, `<physDesc>`, and `<history>`, explaining each tag's role and providing specific examples (e.g., "This is where you'd put the British Library's shelfmark for Cotton Vitellius A.XV"). On the right, show high-resolution images of manuscript features (parchment texture, scribal hand, fire damage) as they are discussed. Include a "spot the difference" mini-quiz comparing a `<bibl>` and `<biblStruct>` example, asking learners to identify the advantages of the latter. Provide alt text for all manuscript images and a downloadable XML template.

### Chapter 3.3 — Editorial Declarations: The `<encodingDesc>` and `<profileDesc>`

#### Learning objectives
*   Explain the purpose of the `<encodingDesc>` in documenting the methodology and editorial principles of a digital edition.
*   Identify and apply key elements within `<encodingDesc>`, such as `<projectDesc>`, `<editorialDecl>`, and `<refsDecl>`.
*   Understand the function of `<profileDesc>` in describing the non-bibliographic aspects of the text, particularly language usage and textual classification.
*   Articulate how detailed editorial declarations contribute to the transparency, reproducibility, and scholarly integrity of digital humanities projects.

#### Detailed lesson content
While the `<fileDesc>` tells us *what* the digital edition is and *where* it comes from, the `<encodingDesc>` and `<profileDesc>` tell us *how* it was made and *what kind* of text it is. These sections are where you, as the scholarly editor, document your methodological choices, the principles guiding your encoding, and the characteristics of the text that aren't purely bibliographic. This level of transparency is paramount in digital humanities, as it allows other scholars to understand your interpretive framework, assess the reliability of your data, and even replicate or build upon your work. Without these declarations, your encoded text, no matter how meticulously transcribed, remains a "black box" of data.

The **`<encodingDesc>`** (encoding description) is where you lay bare your editorial philosophy and technical decisions. It's a crucial component for adhering to the "scholarly editing" and "standards" skills.
*   **`<projectDesc>`**: This element allows you to describe the project under which the TEI file was created. It's a place for narrative context, explaining the project's aims, funding, and any collaborative aspects. For instance, "This digital edition is part of the 'Global Shakespeare' project, funded by the National Endowment for the Humanities, aiming to provide open-access critical editions of Shakespeare's plays."
*   **`<editorialDecl>`**: This is perhaps the most important part of the `<encodingDesc>` for scholarly transparency. Here, you explicitly state your editorial principles and practices. This includes:
    *   **`<p>` elements**: Use these to explain general principles. For example, "All abbreviations have been silently expanded," or "Original spelling and punctuation have been retained."
    *   **`<*: Describes how **`<normalization>`**: Details any normalization applied to the text, such as modernizing archaic spellings or standardizing variant forms. This is critical for understanding the textual fidelity.
    *   **`<quotation>`**: Explains how quotations are marked and if any changes were made to them.
    *   **`<hyphenation>`**: Specifies how hyphenated words (especially those split across line breaks in the source) are treated.
    *   **`<segmentation>`**: Describes how the text has been divided into structural units (e.g., paragraphs, sentences, speeches).
    *   **`<stdVals>`**: If you've standardized certain values (e.g., dates, names), this element explains the methodology.
    A common mistake here is to be vague or to omit discussion of crucial editorial decisions. For example, simply stating "* they were made (e.g., silently, or using `<sic>` and `<corr>` tags) leaves a significant gap in scholarly accountability. The explicit declaration of these choices is a hallmark of rigorous scholarly editing.
*   **`<refsDecl>`**: (Reference Declaration) This element defines any reference systems used in the text, such as line numbering schemes, page numbering, or canonical reference systems. This is vital for consistent citation and cross-referencing within and across digital editions. For instance, you might declare a line numbering system that matches a specific print edition.

The **`<profileDesc>`** (profile description) provides information about the non-bibliographic aspects of the text itself, helping to characterize its content.
*   **`<creation>`**: Describes the date and place of the text's creation. This is about the *original text*, not the digital edition.
*   **`<langUsage>`**: This is a critical element for multilingual texts or for documenting the specific language varieties used. Within `<langUsage>`, you use `<language>` elements, each with an `@ident` attribute specifying the language using ISO 639-2 or 639-3 codes (e.g., `eng` for English, `lat` for Latin, `fro` for Old French). You can also specify the proportion of a language if multiple are present. This is essential for linguistic analysis and for search engines to correctly identify and process the text. For example, a medieval text might contain Latin, Old English, and Anglo-Norman French. Declaring these languages accurately is vital for linguistic research.
*   **`<textClass>`**: This element allows you to classify the text by genre, subject, or other categories. It typically contains `<keywords>` (with `<term>` elements for specific keywords) or `<catRef>` (category reference) linking to a `<taxonomy>` defined elsewhere in the header. This aids discoverability and allows researchers to find texts relevant to their specific interests. For example, a text might be classified as "Poetry," "Epic," and "Medieval."

By meticulously completing the `<encodingDesc>` and `<profileDesc>`, you transform a raw XML file into a fully documented, transparent, and academically robust digital resource, upholding the highest standards of scholarly editing and digital humanities practice.

#### Key concepts
*   **`<encodingDesc>`**: (Encoding Description) A required element in the `teiHeader` that documents the methodology, editorial principles, and technical decisions made during the creation of the digital edition.
*   **`<projectDesc>`**: Describes the project under which the TEI file was created, including its aims and funding.
*   **`<editorialDecl>`**: Explicitly states the editorial principles and practices applied to the text, such as **`<refsDecl>`**: (Reference Declaration) Defines any reference systems used in the text (e.g., line numbering, page numbering).
*   **`<profileDesc>`**: (Profile Description) A required element in the `teiHeader` that describes the non-bibliographic aspects of the text, such as its language usage and textual classification.
*   **`<langUsage>`**: Specifies the language(s) used in the text, typically using ISO language codes.
*   **`<textClass>`**: Classifies the text by genre, subject, or other categories, often using keywords or references to a taxonomy.
*   **Transparency**: The principle of making all editorial and technical decisions explicit and documented, crucial for scholarly integrity and reproducibility.

#### Hands-on activity
**Activity: Documenting Editorial Choices and Text Characteristics**

Building on your `teiHeader` from Chapter 3.1 (e.g., for "The Raven" or *Pride and Prejudice*), now add the `<encodingDesc>` and `<profileDesc>` sections.

1.  **`<encodingDesc>`**:
    *   Add a `<projectDesc>` explaining a hypothetical project goal (e.g., "This project aims to create a faithful diplomatic edition of [Your Chosen Text] for pedagogical use.").
    *   Add an `<editorialDecl>` with at least three specific editorial policies. Consider:
        *   How you handle original spelling and punctuation (e.g., "Original spelling and punctuation are retained.").
        *   How you handle obvious errors in the source (e.g., "Obvious typographical errors in the source text have been silently corrected, with a note in the `<note>` element if significant.").
        *   How you handle line breaks or hyphenation (e.g., "Hyphenated words split across line breaks in the source are silently recombined.").
2.  **`<profileDesc>`**:
    *   Add a `<creation>` element with a hypothetical date and place of the *original text's* creation (e.g., "1845, New York" for "The Raven").
    *   Add a `<langUsage>` element, specifying the primary language of your text using the correct ISO 639-2/3 code (e.g., `eng` for English).
    *   Add a `<textClass>` with at least two `<term>` elements categorizing your text (e.g., "Poetry," "Gothic," "19th-century literature").

Integrate these new sections into your existing `teiHeader` XML file.

#### Assessment idea
1.  **Question:** A digital humanities project publishes a TEI edition of a historical document but omits the `<editorialDecl>` within the `teiHeader`. Discuss two significant negative consequences of this omission for scholarly users, referencing the principles of "scholarly editing" and "standards."
    *   **Model Response:** Omitting the `<editorialDecl>` has two significant negative consequences for scholarly users:
        1.  **Lack of Transparency and Reproducibility (Scholarly Editing):** Without an `<editorialDecl>`, users have no insight into the methodological choices and principles that guided the creation of the digital edition. They cannot determine if the text is a diplomatic transcription, a normalized edition, or if silent *Impeded Reuse and Interoperability (Standards):** The absence of explicit editorial declarations means that users cannot confidently integrate the text into larger corpora or compare it with other editions, as they don't know the basis for its textual representation. For instance, if one edition normalizes spelling and another retains original spelling, comparing them without this knowledge would lead to flawed analysis. This hinders interoperability and the ability to leverage the text according to established digital humanities "standards" for data sharing and reuse, as the context for its interpretation and application is missing.

2.  **Question:** You are encoding a 16th-century play that features dialogue in both Early Modern English and occasional Latin phrases. How would you use the `<langUsage>` element within the `<profileDesc>` to accurately represent this linguistic diversity, and why is this important for digital scholarship?
    *   **Model Response:** To represent the linguistic diversity of a 16th-century play with Early Modern English and Latin phrases, I would use multiple `<language>` elements within the `<langUsage>` element, each with an `@ident` attribute specifying the correct ISO language code.
        ```xml
        <langUsage>
          <language ident="enm">Early Modern English</language>
          <language ident="lat">Latin</language>
        </langUsage>
        ```
        This is important for digital scholarship for several reasons:
        1.  **Linguistic Analysis:** It allows researchers studying historical linguistics to easily identify and extract passages in specific languages for analysis (e.g., tracking the use of Latin in English drama).
        2.  **Search and Discovery:** Search engines and digital libraries can use this metadata to accurately index and retrieve texts based on their linguistic content, improving discoverability for specialized research.
        3.  **Tool Compatibility:** Natural Language Processing (NLP) tools and other text analysis software can process the text more effectively if they know the language of different segments, preventing misinterpretations.
        4.  **Accessibility and Translation:** It provides crucial information for developing tools that might offer translations or linguistic support, enhancing accessibility for a broader audience.

#### AI generation note
Create an 11-minute interactive slide deck presentation. Each slide focuses on a specific element within `<encodingDesc>` or `<profileDesc>`, showing its XML structure and providing 2-3 concrete examples (e.g., different `<editorialDecl>` policies, various `<language>` codes). Include a "scenario analysis" interactive element where learners are presented with a hypothetical editorial decision (e.g., "How would you mark a silently corrected typo?") and asked to select the appropriate TEI element/approach, followed by an explanation. Visuals should include diagrams illustrating the hierarchy of these elements within the `teiHeader`. Provide a downloadable checklist for common editorial decisions.

### Chapter 3.4 — Basic Text Structure: The `<body>` and its Divisions (`<div>`)

#### Learning objectives
*   Understand the fundamental role of the `<text>` element as the container for the `teiHeader` and the main textual content.
*   Identify the `<body>` element as the primary container for the textual content after the `teiHeader`.
*   Apply the `<div>` element to create hierarchical divisions within a text, such as chapters, acts, or sections.
*   Utilize common attributes for `<div>` elements, including `@type`, `@n`, and `@id`, to enhance semantic meaning and navigability.

#### Detailed lesson content
Having meticulously documented our digital edition and its source in the `teiHeader`, we now turn our attention to the actual text itself. The entire TEI document is wrapped within the `<TEI>` root element. Inside `<TEI>`, the first child is always the `teiHeader`, which we've just explored. The second and final child of `<TEI>` is the `<text>` element. The `<text>` element acts as the overarching container for the textual content, logically separating it from the metadata in the `teiHeader`. It's a simple, yet crucial, structural element that signals the beginning of the primary content.

Within the `<text>` element, the most common and fundamental container for the main body of the text is the `<body>` element. While `<text>` can also contain other elements like `<front>` (front matter, e.g., prefaces, dedications) and `<back>` (back matter, e.g., appendices, indexes), for most straightforward textual encoding, the `<body>` is where the bulk of your work will reside. The `<body>` element is designed to hold the main content of a work, and it's within this element that we begin to impose a logical, hierarchical structure on the text using `<div>` (division) elements.

The `<div>` element is the workhorse of TEI for structuring text. It represents a major division of a text, such as a book, chapter, act, scene, canto, or section. The power of `<div>` lies in its ability to nest, creating a hierarchical outline of your text. For example, a novel might have `<div>`s for "Book 1," "Book 2," etc., and within each of those, further `<div>`s for "Chapter 1," "Chapter 2," and so on. A play would typically have `<div>`s for "Act I," "Act II," and then nested `<div>`s for "Scene 1," "Scene 2." This hierarchical structure is not merely for visual organization; it's a semantic representation of the text's inherent organization, which is vital for "scholarly editing" and "XML, markup" skills.

To make `<div>` elements semantically rich and useful for navigation and analysis, we employ several key attributes:
*   **`@type`**: This attribute is used to specify the nature or type of the division. It's a free-form text string, but consistency is key. Examples include `@type="chapter"`, `@type="act"`, `@type="scene"`, `@type="poem"`, `@type="section"`. Using `@type` allows you to differentiate between different levels of divisions and enables more precise searching and processing of your text. For instance, you could easily extract all "chapters" from a novel.
*   **`@n`**: This attribute provides a conventional name or number for the division. For example, for a chapter titled "The Journey," you might have `@type="chapter" @n="1"`. For a Roman numeral chapter, `@n="I"`. This is distinct from `@type` because `@type` describes the *kind* of division, while `@n` gives its specific identifier.
*   **`@id`**: This attribute provides a unique identifier for the division. Every `@id` value within a single XML document must be unique. This is incredibly useful for creating internal links within your document (e.g., a table of contents linking to specific chapters) or for external referencing. The `@id` is a standard XML attribute, but its application in TEI is particularly powerful for creating navigable and referenceable digital editions. A common mistake is to forget that `@id` values must be unique; duplicating an `@id` will result in an invalid XML document.

Let's consider a simple example for a short story:
```xml
<text>
  <body>
    <div type="story" n="The Tell-Tale Heart" id="tale-heart">
      <head>The Tell-Tale Heart</head>
      <div type="section" n="1" id="tale-heart-s1">
        <p>True!—nervous—very, very dreadfully nervous I had been and am; but why will you say that I am mad?</p>
        <!-- more paragraphs -->
      </div>
      <div type="section" n="2" id="tale-heart-s2">
        <p>It is impossible to say how first the idea entered my brain; but once conceived, it haunted me day and night.</p>
        <!-- more paragraphs -->
      </div>
    </div>
  </body>
</text>
```
In this structure, we have a top-level `<div>` for the entire story, identified by its type and title. Nested within it are `<div>`s for sections, each with its own number and unique ID. This allows a user or a program to jump directly to "section 2" of "The Tell-Tale Heart." This progressive structuring from the overall document to major divisions is fundamental to creating well-formed and usable TEI documents, aligning with the "XML, markup" skills. It's about imposing a logical, rather than merely visual, organization on the text, which is crucial for computational analysis and long-term preservation.

#### Key concepts
*   **`<text>`**: The top-level element within `<TEI>` that contains the main textual content of the document, following the `teiHeader`.
*   **`<body>`**: The primary container within `<text>` for the main content of a work, typically holding the `<div>` elements.
*   **`<div>`**: (Division) A fundamental TEI element used to mark major structural divisions of a text, such as chapters, acts, scenes, or sections. `<div>`s can be nested to create a hierarchy.
*   **`@type` attribute**: Specifies the nature or kind of the division (e.g., "chapter," "act," "poem").
*   **`@n` attribute**: Provides a conventional name or number for the division (e.g., "1," "I," "Introduction").
*   **`@id` attribute**: Provides a unique identifier for the division, allowing for internal linking and external referencing.
*   **Hierarchical Structure**: The organization of text into nested levels of divisions, reflecting its logical organization.

#### Hands-on activity
**Activity: Structuring a Play or a Poem Collection**

Choose one of the following scenarios and structure its main body using `<body>` and nested `<div>` elements, along with `@type`, `@n`, and `@id` attributes.

**Scenario A: A Short Play**
Structure the first act and first two scenes of a play (e.g., Shakespeare's *Romeo and Juliet*).
*   The entire play should be a top-level `<div>`.
*   Each act should be a `<div>` nested within the play.
*   Each scene should be a `<div>` nested within its respective act.
*   Include a `<head>` element for the title of the play, act, and scene.
*   Add placeholder `<p>` elements within the scenes.

**Scenario B: A Collection of Poems**
Structure a collection of three short poems (e.g., three sonnets).
*   The entire collection should be a top-level `<div>`.
*   Each poem should be a `<div>` nested within the collection.
*   Include a `<head>` element for the title of the collection and each poem.
*   Add placeholder `<lg>` (line group) elements for the poem lines (we'll cover `<l>` later).

Ensure all `<div>` elements have `@type`, `@n`, and `@id` attributes, making sure `@id` values are unique.

```xml
<text>
  <body>
    <!-- Your structured content here -->
  </body>
</text>
```

#### Assessment idea
1.  **Question:** You are encoding a novel that has parts, books, and chapters. Describe how you would use `<div>` elements and their attributes (`@type`, `@n`, `@id`) to represent this hierarchical structure in TEI. Provide a short XML example for a "Part I," "Book 1," "Chapter 1."
    *   **Model Response:** To represent a novel with parts, books, and chapters, I would use nested `<div>` elements. The outermost `<div>` would represent the "Part," nested within that would be a `<div>` for the "Book," and finally, nested within the "Book" `<div>` would be a `<div>` for the "Chapter."
        *   The `@type` attribute would specify the nature of the division (e.g., "part," "book," "chapter").
        *   The `@n` attribute would provide the conventional number or name (e.g., "I," "1").
        *   The `@id` attribute would provide a unique identifier for each division, allowing for direct referencing.

        ```xml
        <text>
          <body>
            <div type="part" n="I" id="part-i">
              <head>Part I</head>
              <div type="book" n="1" id="part-i-book-1">
                <head>Book 1</head>
                <div type="chapter" n="1" id="part-i-book-1-chap-1">
                  <head>Chapter 1: The Beginning</head>
                  <p>...</p>
                </div>
                <!-- More chapters -->
              </div>
              <!-- More books -->
            </div>
            <!-- More parts -->
          </body>
        </text>
        ```

2.  **Question:** Explain the difference between the `@type` and `@n` attributes for a `<div>` element. Why is it beneficial to use both, rather than just one or the other, when structuring a text?
    *   **Model Response:**
        *   The **`@type` attribute** specifies the *kind* or *nature* of the division (e.g., "chapter," "act," "preface," "introduction"). It describes the generic category of the structural unit.
        *   The **`@n` attribute** provides the *conventional name or number* of that specific division (e.g., "1," "II," "Epilogue," "The Storm"). It gives the particular identifier within its type.
        *   It is beneficial to use both because they provide complementary information, enhancing the semantic richness and utility of the markup:
            1.  **Clarity and Specificity:** `@type` tells us *what* it is (a chapter), and `@n` tells us *which one* it is (Chapter 5). This makes the structure unambiguous.
            2.  **Computational Processing:** Using both allows for more granular and robust processing. For example, a script could easily identify all elements of `@type="chapter"` and then sort them by their `@n` value, or extract the `head` of `@type="preface"`.
            3.  **Flexibility:** Some divisions might not have a clear number but still have a type (e.g., `@type="introduction"`). Others might have a number but a less obvious type. Using both provides maximum descriptive power without forcing one into the other's role. This adherence to "markup" standards ensures both human readability and machine processability.

#### AI generation note
Create a 9-minute animated whiteboard video. Start with a blank `<text>` element and progressively add `<body>`, then nested `<div>`s for a play (Act I, Scene 1, Scene 2). Animate the addition of `@type`, `@n`, and `@id` attributes, explaining their purpose with clear text overlays. Use color-coding to differentiate between the elements and their attributes. Include a short interactive quiz asking learners to correctly identify the `@type` and `@n` for different textual divisions (e.g., "What attributes would you use for 'Canto III' of an epic poem?"). Provide a downloadable cheat sheet of common `@type` values.

### Chapter 3.5 — Marking Up Prose: Paragraphs, Headings, and Basic Emphasis

#### Learning objectives
*   Correctly identify and use the `<p>` element for marking up paragraphs in prose texts.
*   Apply the `<head>` element to mark titles and headings within `<div>` elements.
*   Differentiate between semantic emphasis (`<emph>`) and presentational highlighting (`<hi>`), and apply them appropriately.
*   Understand common pitfalls in marking prose, such as over-markup or confusing structural elements with presentational ones.

#### Detailed lesson content
With the overarching structure of our text in place using `<body>` and `<div>` elements, we can now delve into marking up the actual prose content. The goal here is to represent the logical and semantic features of the text, rather than merely replicating its visual appearance. This distinction is fundamental to TEI and digital humanities: we are encoding *meaning* and *structure*, not just formatting.

The most ubiquitous element for prose is the `<p>` (paragraph) element. In TEI, a paragraph is a block of prose text that forms a coherent unit of thought. It is the basic building block for continuous prose. Every paragraph in your source text should be enclosed within `<p>` tags. It might seem straightforward, but a common pitfall for beginners is to break paragraphs based on visual line breaks or page breaks, rather than logical breaks in the text. Remember, TEI aims to represent the underlying structure of the text, which often transcends its pagination or lineation in a specific edition. For instance, if a paragraph spans two pages in a print book, it should still be a single `<p>` element in your TEI encoding. This aligns with the "markup" skill, emphasizing logical over visual representation.

Headings and titles within your text are marked using the `<head>` element. This element is typically placed at the beginning of a `<div>` to provide a title or heading for that division. For example, if you have a `<div>` for a chapter, the chapter title would be enclosed in `<head>` tags. The `<head>` element is specifically for the textual content of a heading, not for defining its hierarchical level (that's the job of the `<div>` structure itself). While you might see different heading sizes in a print edition, in TEI, all headings are simply `<head>` elements; their visual rendering is handled by stylesheets, not by the markup. This separation of content and presentation is a core tenet of XML and TEI.

Now, let's consider how to mark up emphasis or highlighting within the text. TEI offers two primary elements for this: `<hi>` (highlighted) and `<emph>` (emphasized). Understanding the semantic difference between these is crucial.
*   **`<hi>` (highlighted)**: This element is used for presentational highlighting, where the original text uses a particular font, style, or color primarily for visual effect, without necessarily implying a specific semantic meaning beyond "standing out." Examples include text in italics, bold, or small caps in the original source, where the editor believes the original formatting was purely for visual distinction. For example, if a character's name is always italicized in a play for no clear semantic reason other than convention, you might use `<hi rend="italic">Hamlet</hi>`. The `@rend` attribute (short for "rendering") is typically used with `<hi>` to describe the original visual presentation (e.g., `@rend="bold"`, `@rend="italic"`, `@rend="smallcaps"`).
*   **`<emph>` (emphasized)**: This element is used for semantic emphasis, where the highlighting in the original text indicates that a word or phrase is being given particular stress or importance by the author or speaker. This implies a deliberate authorial choice to emphasize meaning. For example, if a character in a novel *shouts* a word, or if an author uses italics to draw attention to a crucial concept, `<emph>` would be more appropriate. The distinction can be subtle and requires careful editorial judgment, but the rule of thumb is: if it's purely visual, use `<hi>`; if it's about meaning or stress, use `<emph>`.

Here's an example demonstrating `<p>`, `<head>`, `<hi>`, and `<emph>`:
```xml
<div type="chapter" n="3" id="chap-3">
  <head>Chapter 3: The <emph>Unexpected</emph> Visitor</head>
  <p>It was a dark and <hi rend="italic">stormy</hi> night when the doorbell rang. Never in her wildest dreams had she anticipated such a caller.</p>
  <p>The old woman, known throughout the village for her <hi rend="smallcaps">eccentricities</hi>, slowly made her way to the door, muttering, "Who could it <emph>possibly</emph> be at this hour?"</p>
</div>
```
In this example, "Unexpected" is semantically emphasized in the chapter title, while "stormy" is italicized for presentational effect. "eccentricities" is rendered in small caps, again for visual distinction, and "possibly" is semantically emphasized in the old woman's speech.

A common pitfall is to use `<hi>` for everything that looks different. However, by carefully distinguishing between `<hi>` and `<emph>`, you add a layer of semantic richness to your encoding that can be invaluable for linguistic analysis, literary studies, and other "digital humanities" research. This precise application of markup is a core aspect of effective TEI encoding and contributes significantly to the "scholarly editing" and "standards" skills. Always ask yourself: does this formatting convey a specific meaning, or is it merely a visual style? Your answer will guide your choice between `<hi>` and `<emph>`.

#### Key concepts
*   **`<p>`**: (Paragraph) The fundamental TEI element for marking up a block of continuous prose text.
*   **`<head>`**: An element used to mark a title or heading for a division (`<div>`) or other structural unit.
*   **`<hi>`**: (Highlighted) An element used for presentational highlighting in the source text (e.g., italics, bold, small caps), where the formatting is primarily visual.
*   **`<emph>`**: (Emphasized) An element used for semantic emphasis in the source text, where the formatting indicates a deliberate stress or importance in meaning.
*   **`@rend` attribute**: An attribute often used with `<hi>` to describe the specific rendering (e.g., `rend="italic"`, `rend="bold"`).
*   **Semantic vs. Presentational Markup**: The distinction between encoding the meaning or function of a text (semantic) versus encoding its visual appearance (presentational). TEI prioritizes semantic markup.

#### Hands-on activity
**Activity: Marking Up a Prose Passage**

Take the following short passage. Your task is to mark it up using `<p>`, `<head>`, `<hi>`, and `<emph>` elements within a `<div>` structure.

**Passage:**
"The Raven" by Edgar Allan Poe (excerpt)

Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore—
While I nodded, nearly napping, suddenly there came a tapping,
As of some one gently rapping, rapping at my chamber door.
"'Tis some visitor," I muttered, "tapping at my chamber door—
Only this and nothing more."

Ah, distinctly I remember it was in the bleak December;
And each separate dying ember wrought its ghost upon the floor.
Eagerly I wished the morrow;—vainly I had sought to borrow
From my books surcease of sorrow—sorrow for the lost Lenore—
For the rare and radiant maiden whom the angels name Lenore—
Nameless here for evermore.

**Instructions:**
1.  Enclose the entire passage in a `<div>` with `@type="excerpt"` and `@n="Poe-Raven-1"` and a suitable `@id`.
2.  Add a `<head>` element for the title of the excerpt (e.g., "Excerpt from The Raven").
3.  Each stanza should be treated as a separate paragraph (`<p>`).
4.  Identify any words that seem to be *semantically emphasized* by the author and mark them with `<emph>`.
5.  Identify any words that might be *presentational highlighting* (e.g., if "Lenore" was italicized in the original, use `<hi rend="italic">`). If no obvious presentational highlighting exists, you can invent one for practice (e.g., imagine "midnight dreary" was bolded).

```xml
<text>
  <body>
    <div type="excerpt" n="Poe-Raven-1" id="poe-raven-excerpt-1">
      <head>...</head>
      <p>...</p>
      <p>...</p>
    </div>
  </body>
</text>
```

#### Assessment idea
1.  **Question:** You are encoding a historical letter where the author frequently underlines words for emphasis, and also occasionally uses a different ink color for proper nouns, which doesn't seem to carry additional semantic weight beyond identification. How would you apply TEI's `<hi>` and `<emph>` elements, along with attributes, to accurately represent these features, and why is this distinction important?
    *   **Model Response:**
        *   For the words the author **underlines for emphasis**, I would use the `<emph>` element. This is because underlining is a direct authorial action intended to convey semantic stress or importance. I would also use the `@rend` attribute to document the original visual cue: `<emph rend="underlined">crucial</emph>`.
        *   For the **proper nouns written in a different ink color**, I would use the `<hi>` element with a `@rend` attribute indicating the color: `<hi rend="redInk">London</hi>`. This is because the different ink color, in this scenario, is described as a presentational choice for identification rather than an additional layer of semantic emphasis.
        *   The distinction is important because it allows for a more nuanced and accurate representation of the source text's features. Using `<emph>` signals to researchers that a word carries authorial stress, which can be crucial for interpreting the text's meaning and tone. Using `<hi>` with `@rend` accurately documents the original visual appearance without falsely attributing semantic weight, which is vital for scholarly editing and maintaining the integrity of the digital edition. This separation allows for different types of analysis (e.g., studying authorial emphasis vs. studying scribal/authorial presentation habits).

2.  **Question:** A novice encoder is working with a scanned PDF of an old book and is marking every line break in the PDF with a `<p>` tag, resulting in many single-line paragraphs. Explain why this is incorrect TEI practice and what the correct approach should be, referencing the principle of semantic markup.
    *   **Model Response:** Marking every line break in a scanned PDF with a `<p>` tag is an incorrect TEI practice because it confuses presentational formatting (line breaks on a page) with semantic structure (paragraphs as coherent units of thought). The `<p>` element in TEI is designed to represent a logical paragraph, which is a block of prose text that forms a complete and coherent idea. A single paragraph in a print book might span multiple lines or even multiple pages, but it remains one logical unit.
    *   The correct approach, guided by the principle of semantic markup, is to:
        1.  **Identify Logical Paragraphs:** Read the text and identify where the author intended a new paragraph to begin (typically indicated by an indentation or a blank line in the source, signifying a shift in topic or thought).
        2.  **Use Single `<p>` Tags:** Enclose each complete, logical paragraph within a single `<p>` element, regardless of how many lines it occupies on the printed page.
        3.  **Ignore Visual Line Breaks:** Do not encode line breaks within a paragraph as separate `<p>` elements. If there is a need to record original line breaks for specific analytical purposes (e.g., poetic lineation or diplomatic transcription), other TEI elements like `<lb/>` (line break) are available, but they are distinct from `<p>`.
    *   This semantic approach ensures that the encoded text accurately reflects its underlying structure, making it more useful for analysis, search, and reuse, rather than merely replicating the visual layout of a specific edition.

#### AI generation note
Create a 10-minute interactive code-along video. The instructor shares their screen, demonstrating how to mark up a short prose passage (e.g., a paragraph from a historical speech or a literary essay). They will start with raw text, then add `<div>`, `<head>`, `<p>`, and finally apply `<hi>` and `<emph>` with `@rend` attributes, explaining each step and the semantic distinction. Learners are encouraged to pause and encode along. Include a "spot the error" interactive element where a snippet of incorrectly marked prose is shown, and learners must identify and correct the mistake (e.g., `<p>` used for every line). Provide a downloadable text file for the code-along.

---

## Module 4: Encoding Common Textual Features

## Module Goal
This module aims to equip learners with the practical skills to accurately encode a wide range of common textual features using TEI XML, moving beyond basic structural elements to represent nuances of text, editorial interventions, and scholarly annotations. By the end of this module, you will be able to apply appropriate TEI elements and attributes to capture the richness and complexity of historical and literary documents, preparing you for more advanced scholarly editing tasks.

---

### Chapter 4.1 — Paragraphs, Headings, and Lists

#### Learning objectives
*   Accurately identify and encode paragraphs using the `<p>` element in TEI XML.
*   Differentiate between various types of headings and apply the `<head>` element with appropriate attributes.
*   Correctly structure different forms of lists (ordered, unordered, definition) using `<list>`, `<item>`, and `<label>` elements.
*   Understand the semantic distinctions of these structural elements versus purely presentational markup.
*   Avoid common pitfalls related to improper nesting and misapplication of structural tags.

#### Detailed lesson content
As we move beyond the foundational `<body>` and `<div>` elements, the next crucial step in TEI encoding involves structuring the prose itself. The most fundamental unit of continuous prose is the paragraph, represented by the `<p>` element. While seemingly straightforward, the `<p>` element carries significant semantic weight. It signifies a coherent block of text, typically dealing with a single point or idea, and is visually separated from other paragraphs. Encoding paragraphs correctly is not merely about replicating line breaks or visual spacing; it's about identifying the logical divisions within the text. For instance, in a historical letter, each distinct topic or thought might constitute a new paragraph, even if the original manuscript lacks explicit indentation. A common mistake here is to use `<p>` to force line breaks within a single logical paragraph, or to use it as a generic container for any block of text. Remember, TEI encourages semantic encoding: `<p>` means "paragraph," not "block of text that needs a line break." If you need a line break within a paragraph for poetic verse or an address, other elements like `<lb/>` (line break) or `<address>` would be more appropriate, which we will explore in later modules.

Beyond paragraphs, texts are often organized with headings and subheadings to guide the reader through their content. The `<head>` element in TEI is used to mark any kind of heading, title, or label that introduces a section of text. Unlike HTML, where `<h1>`, `<h2>`, etc., imply a hierarchical structure, TEI's `<head>` element is more flexible. Hierarchy is typically established by the nesting of `<div>` elements. For example, a `<div>` representing a chapter might contain a `<head>` for the chapter title, and then nested `<div>`s for sections, each with its own `<head>`. The power of `<head>` lies in its attributes. The `@type` attribute can be used to specify the nature of the heading (e.g., `type="chapter"`, `type="section"`, `type="subsection"`), which can be invaluable for styling or for generating tables of contents. The `@n` attribute can capture the numbering of a heading (e.g., `n="1.2"`). Consider a scholarly article: the main title is a `<head>` within the `<front>` matter, while section titles like "Introduction," "Methodology," and "Conclusion" are `<head>` elements within their respective `<div>`s in the `<body>`. It's crucial not to confuse the visual appearance of a heading (e.g., bold, larger font) with its semantic function. A bolded sentence might just be emphasized text, not a structural heading, and should be encoded with `<hi>` or `<emph>` (which we will cover in the next chapter) rather than `<head>`.

Lists are another ubiquitous feature of textual organization, appearing in everything from recipes and inventories to arguments and bibliographies. TEI provides a robust set of elements for encoding various types of lists. The primary container for any list is the `<list>` element. Within a `<list>`, individual items are marked with `<item>`. For ordered lists (e.g., numbered steps), the `<list>` element can take an `@type` attribute, such as `type="ordered"` or `type="numbered"`. For unordered lists (e.g., bullet points), `type="unordered"` or `type="bulleted"` is appropriate. Definition lists, where a term is followed by its definition, are also supported. In such cases, the `<item>` element can contain a `<label>` for the term being defined, followed by the definition itself within the `<item>`.

Let's look at an example from a historical document, a 19th-century scientific report. Imagine a section detailing experimental procedures:

```xml
<div type="section">
  <head>Experimental Setup</head>
  <p>The apparatus consisted of several key components, carefully assembled to ensure precise measurements.</p>
  <list type="ordered">
    <item>A high-precision thermometer, calibrated against a known standard, was used to monitor temperature fluctuations.</item>
    <item>A sealed glass chamber, designed to maintain a vacuum, housed the primary reaction vessel.</item>
    <item>A series of pressure gauges, each with a distinct measurement range, were connected at various points.</item>
  </list>
  <p>Each component was rigorously tested prior to the experiment's commencement.</p>
</div>
```
Here, the `<head>` clearly marks the section title, and the `<list type="ordered">` precisely captures the numbered steps of the setup. This semantic encoding allows for automated processing, such as generating a table of contents or extracting all experimental steps. A common error is to try to represent the numbering of an ordered list directly in the `<item>` content (e.g., `<item>1. A high-precision thermometer...</item>`). Instead, the numbering is an inherent property of the `list type="ordered"` and should not be duplicated in the content itself. The rendering software or stylesheet will handle the actual display of numbers. Similarly, for definition lists, ensure the `<label>` is correctly nested within the `<item>` to clearly associate the term with its definition. Understanding these distinctions is key to producing semantically rich and interoperable TEI documents.

#### Key concepts
*   **`<p>` (paragraph):** A block-level element used to mark a coherent unit of continuous prose.
*   **`<head>` (heading):** An element used for any kind of heading, title, or label that introduces a section of text; its attributes (`@type`, `@n`) can specify its nature and numbering.
*   **`<list>` (list):** A container element for any sequence of items, often taking an `@type` attribute (e.g., `ordered`, `unordered`, `bulleted`, `numbered`).
*   **`<item>` (list item):** An element used to mark an individual item within a `<list>`.
*   **`<label>` (label):** An element used within a `<item>` to mark the term in a definition list, or a label for an item.
*   **Semantic Encoding:** The practice of marking up text based on its meaning and function rather than its visual appearance.

#### Hands-on activity
**Encoding a Recipe from a Historical Cookbook**

Imagine you are encoding a recipe from an early 20th-century cookbook. Transcribe and encode the following recipe snippet using the TEI elements learned in this chapter. Pay close attention to distinguishing headings, paragraphs, and list items.

**Original Text:**
> **Lemon Meringue Pie**
> A delightful dessert, perfect for any occasion. This recipe has been passed down through generations.
>
> Ingredients:
> 1.  Pie crust (pre-baked)
> 2.  4 egg yolks
> 3.  1/2 cup lemon juice
> 4.  1 cup sugar
> 5.  2 tbsp cornstarch
>
> Method:
> Combine egg yolks, lemon juice, sugar, and cornstarch in a saucepan. Cook over medium heat, stirring constantly, until thickened. Pour into pie crust.
>
> For the Meringue:
> Beat 4 egg whites until stiff. Gradually add 1/4 cup sugar. Spread over warm filling. Bake at 350°F for 10-12 minutes until golden brown.

**Your Task:**
Encode this text snippet into TEI XML, ensuring proper use of `<head>`, `<p>`, `<list>`, and `<item>`.

#### Assessment idea
1.  **Question:** Consider the following XML snippet:
    ```xml
    <p>
      This is the first line.<lb/>
      This is the second line.<lb/>
      This is the third line.
    </p>
    ```
    Explain why this encoding, while technically valid, might be considered poor practice in semantic TEI encoding, and suggest a more appropriate alternative if the goal is to represent a stanza of poetry.

    **Model Response:**
    This encoding is problematic because it uses `<p>` (paragraph) to contain what appears to be distinct lines, then uses `<lb/>` (line break) to force visual separation. Semantically, a paragraph is a coherent unit of prose, not a container for arbitrary lines. If these lines represent a stanza of poetry, the more appropriate TEI elements would be `<lg>` (line group) for the stanza and `<l>` (line) for each individual poetic line. This provides semantic clarity, indicating that the text is verse rather than prose.

    **Example of better encoding for poetry:**
    ```xml
    <lg>
      <l>This is the first line.</l>
      <l>This is the second line.</l>
      <l>This is the third line.</l>
    </lg>
    ```

2.  **Question:** You are encoding a glossary where terms are defined. Which TEI elements would you use to represent a single entry like "XML: Extensible Markup Language, a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable"? Provide the TEI XML.

    **Model Response:**
    For a glossary entry, a definition list structure is most appropriate. This involves a `<list>` containing an `<item>`, where the term is marked with `<label>` and the definition follows within the `<item>`.

    ```xml
    <list type="glossary">
      <item>
        <label>XML</label>
        Extensible Markup Language, a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.
      </item>
    </list>
    ```

#### AI generation note
Create a 15-minute interactive lecture video. Start with a visual of a historical document (e.g., a page from a 19th-century novel or a handwritten letter) and highlight paragraphs, headings, and lists as they appear. Then, transition to a split-screen view showing the original text alongside the TEI XML encoding, demonstrating the application of `<p>`, `<head>`, `<list>`, `<item>`, and `<label>`. Use animated overlays to explain the semantic purpose of each tag. Include a specific example of a common mistake (e.g., using `<p>` for line breaks in poetry) and show the correct alternative. End with a 3-minute interactive exercise where learners are presented with a short prose passage and asked to drag-and-drop the correct TEI tags (`<p>`, `<head>`, `<list>`, `<item>`) into designated slots. Provide full captions and a downloadable cheat sheet of common structural elements.

---

### Chapter 4.2 — Highlighting and Emphasis

#### Learning objectives
*   Distinguish between presentational highlighting (`<hi>`) and semantic emphasis (`<emph>`) in TEI encoding.
*   Apply the `<hi>` element with the `@rend` attribute to capture visual characteristics like italics, bold, or underlining from the source text.
*   Utilize the `<emph>` element to mark text that is semantically emphasized by the author or editor.
*   Understand when to use the `@type` attribute with `<hi>` to categorize specific types of highlighting.
*   Avoid the common pitfall of over-encoding visual features when a semantic equivalent exists.

#### Detailed lesson content
Texts, especially historical and literary ones, often employ various forms of highlighting to draw attention to specific words or phrases. This can manifest as italics, bolding, underlining, small caps, or even changes in font size or color. In TEI, it's crucial to differentiate between purely presentational highlighting and semantically significant emphasis. This distinction is at the heart of TEI's philosophy: encode what something *is*, not just what it *looks like*.

The `<hi>` element (for "highlighted") is primarily used to record presentational features of the source text that do not necessarily carry a deeper semantic meaning beyond drawing attention. For instance, if a 19th-century novel consistently italicizes foreign words, but the author does not intend a specific *emphasis* beyond simply marking them as foreign, then `<hi rend="italic">` would be appropriate. The `@rend` attribute (short for "rendering") is central to `<hi>`, allowing you to specify the visual characteristic observed in the source. Common values for `@rend` include `italic`, `bold`, `underline`, `smallcaps`, `superscript`, `subscript`, `strikeThrough`, `doubleUnderline`, etc. You can also combine values, for example, `rend="italic bold"`. It's important to be consistent in your use of `@rend` values across your project. The TEI Guidelines provide recommendations, but you may also define your own controlled vocabulary for `@rend` values in your `teiHeader` if specific rendering styles are unique to your source.

Consider this example from an early printed book:
```xml
<p>The <hi rend="italic">Philosopher's Stone</hi> was believed to transmute base metals into gold.</p>
```
Here, "Philosopher's Stone" is italicized in the original, and `<hi rend="italic">` accurately captures that visual fact.

In contrast, the `<emph>` element (for "emphasized") is used when the highlighting in the source text *does* carry a semantic meaning of emphasis or stress. This is often a matter of interpretation by the encoder. If an author explicitly states, "I want to *emphasize* this point," or if the context strongly suggests that a word is being stressed for rhetorical effect, then `<emph>` is the more appropriate choice. The `<emph>` element does not typically take a `@rend` attribute, as its purpose is semantic, not presentational. If you need to record *how* the emphasis was visually conveyed, you can nest `<hi>` within `<emph>`, though this is less common. More often, the visual rendering is a *consequence* of the emphasis, not its primary encoding.

Let's look at an example where semantic emphasis is clear:
```xml
<p>It was <emph>not</emph> merely a suggestion; it was an imperative command.</p>
```
Here, the word "not" is clearly being stressed for its meaning, making `<emph>` the correct choice.

A common pitfall is to automatically use `<hi rend="italic">` for every italicized word without considering its semantic function. For example, if a play script italicizes stage directions, those are not necessarily "emphasized" in the rhetorical sense; they are a distinct *type* of text. In such cases, a more specific TEI element like `<stage>` might be used, or `<hi rend="italic" type="stageDirection">` if no more specific element is available. The `@type` attribute can be very useful with `<hi>` to categorize *why* something is highlighted, beyond just *how* it looks. For instance, `type="foreign"` for foreign words, `type="title"` for titles of works, or `type="editorial"` for editorial additions that are visually distinct. This adds another layer of semantic richness to your encoding.

The decision between `<hi>` and `<emph>` often requires careful judgment and a deep understanding of the text and its historical context. When in doubt, it's generally safer to use `<hi>` with `@rend` to record the visual fact, and then add a `@type` attribute if there's a clear category for the highlighting. Only use `<emph>` when you are confident that the author intended a rhetorical emphasis. Over-encoding semantic emphasis can lead to misinterpretations of the source text, while under-encoding it can lose valuable rhetorical information. It's a balance, and consistency within your project is paramount.

#### Key concepts
*   **`<hi>` (highlighted):** An element used to mark text that is visually distinct in the source (e.g., italicized, bolded, underlined) but does not necessarily carry a specific semantic emphasis.
*   **`@rend` (rendering attribute):** An attribute used with `<hi>` to specify the visual characteristic of the highlighting (e.g., `italic`, `bold`, `underline`, `smallcaps`).
*   **`<emph>` (emphasized):** An element used to mark text that is semantically stressed or emphasized by the author or editor.
*   **`@type` (type attribute):** An attribute that can be used with `<hi>` to categorize the *reason* for the highlighting (e.g., `foreign`, `title`, `editorial`).
*   **Semantic vs. Presentational:** The distinction between encoding the meaning/function of text (semantic) and encoding its visual appearance (presentational).

#### Hands-on activity
**Analyzing and Encoding Highlighting in a Literary Excerpt**

Read the following excerpt from Mary Shelley's *Frankenstein* (1818 edition). Identify instances of highlighting (italics, bolding, etc.) and decide whether they should be encoded as `<hi>` (presentational) or `<emph>` (semantic). Then, encode the passage in TEI XML.

**Original Text Excerpt:**
> "I had worked hard for nearly two years, for the sole purpose of infusing life into an inanimate body. For this I had deprived myself of rest and health. I had desired it with an ardour that far exceeded moderation; but now that I had finished, the beauty of the dream vanished, and breathless horror and disgust filled my heart. My father had often, through my childhood, said to me, 'William, my boy, you will be *good* to your sister, won't you?' And I had always replied, 'Yes, father, I will be *very* good.' But now, I felt I had been anything but good."

**Your Task:**
Encode the italicized words in the passage. Justify your choice between `<hi rend="italic">` and `<emph>` for each instance.

#### Assessment idea
1.  **Question:** A transcriber encounters a word in a 17th-century manuscript that is underlined. The transcriber is unsure if this underlining represents authorial emphasis or merely a scribal practice to draw attention to a key term. Which TEI element and attribute combination is the safest and most semantically neutral choice for encoding this feature, and why?

    **Model Response:**
    The safest and most semantically neutral choice would be `<hi rend="underline">`.
    *   **`<hi>`:** This element is for general highlighting and presentational features, which aligns with the uncertainty about its semantic intent.
    *   **`@rend="underline"`:** This attribute precisely records the visual characteristic observed in the manuscript without making an interpretive claim about its meaning.
    Using `<emph>` would imply a definite semantic emphasis, which the transcriber is unsure of, thus making it a less appropriate choice in this ambiguous situation.

2.  **Question:** Consider the following sentence from a scholarly article: "The theory posits that *all* observed phenomena are merely manifestations of underlying quantum fluctuations." If the word "all" is italicized in the original source to strongly convey the universality of the claim, how would you encode it in TEI, and why?

    **Model Response:**
    I would encode it as `<emph>all</emph>`.
    *   **`<emph>`:** The context suggests that the italics are used to strongly convey the universality of the claim, indicating a deliberate semantic emphasis by the author. This goes beyond mere presentational highlighting.
    *   While the word is italicized, the *reason* for the italics is semantic emphasis, making `<emph>` the primary and most accurate tag. If one wanted to also record the visual, one could theoretically nest `<hi rend="italic">` inside `<emph>`, but `<emph>` itself often implies a visual rendering anyway, and the semantic meaning is paramount here.

#### AI generation note
Develop a 12-minute interactive module with a focus on visual examples. Present several short text excerpts from different historical periods (e.g., a medieval manuscript, an early modern printed book, a 19th-century novel). For each excerpt, display the original text with various highlighting styles (italics, bold, underlining). Guide learners through a decision-making process: "Is this purely visual, or is there a strong semantic intent?" Use a flow chart animation to illustrate the choice between `<hi>` and `<emph>`. For `<hi>`, demonstrate various `@rend` values. For `<emph>`, discuss contextual clues for semantic intent. Include an interactive drag-and-drop exercise where learners match highlighted phrases from a new excerpt to either `<hi rend="...">` or `<emph>` tags. Provide a downloadable PDF with a "Highlighting Decision Tree" for future reference. Ensure high-contrast visuals for text readability.

---

### Chapter 4.3 — Quotations and Citations

#### Learning objectives
*   Correctly identify and encode direct speech and block quotations using `<q>` and `<quote>` elements.
*   Understand the distinction between inline and block quotations and apply the appropriate TEI element.
*   Utilize the `@who` attribute to identify the speaker of a quotation.
*   Encode formal bibliographic citations using `<cit>` and `<bibl>` elements, linking them to quoted material.
*   Avoid common mistakes such as misattributing speakers or failing to link quotations to their sources.

#### Detailed lesson content
The accurate representation of quotations and citations is fundamental to scholarly editing and digital humanities. Texts are rarely monolithic; they frequently incorporate voices and ideas from other sources, whether through direct quotation, paraphrase, or reference. TEI offers precise mechanisms to encode these intertextual relationships.

For direct speech, or inline quotations that are part of a larger paragraph, the `<q>` element is used. This element is designed for short, usually unformatted, quotations that flow within the main text. A critical attribute for `<q>` is `@who`, which identifies the speaker of the quoted material. This is particularly useful in dialogues, interviews, or any text where multiple voices are present. The value of `@who` should be an XML ID (prefixed with `#`) that points to a `<person>` element defined in the `teiHeader`'s `<listPerson>` section, ensuring consistent identification of individuals across the document. For instance, if a character "Alice" is speaking, the encoding would be `<q who="#alice">"Hello, world!"</q>`. This links the utterance directly to the person element for Alice, allowing for sophisticated analysis of character dialogue.

When a quotation is longer and typically set off from the main text as a distinct block (e.g., indented, smaller font), the `<quote>` element is employed. Unlike `<q>`, `<quote>` is a block-level element and often contains its own paragraphs or even other structural elements. It does not typically take the `@who` attribute directly, as the speaker or source of a block quote is usually introduced in the surrounding prose or within a `<cit>` element.

Let's consider an example from a historical speech transcript:
```xml
<p>In his address, the President declared, <q who="#presA">"We shall overcome this challenge with unwavering resolve."</q> This statement galvanized the nation.</p>
```
Here, `<q>` is used for the inline quote, and `@who="#presA"` links it to the President's entry in the `listPerson`.

For a block quote, imagine a literary critic quoting a long passage from a novel:
```xml
<p>The novel concludes with a poignant reflection on loss:</p>
<quote>
  <p>The silence that followed was not empty, but filled with the echoes of what had been, a symphony of absence that resonated deep within the soul.</p>
  <p>And in that silence, a new understanding began to dawn, fragile yet persistent, like the first light of a winter morning.</p>
</quote>
<p>This passage encapsulates the protagonist's journey of grief and eventual acceptance.</p>
```
Notice how the `<quote>` element contains its own paragraphs, reflecting the internal structure of the quoted material.

Beyond direct quotations, texts often refer to other works through formal citations. TEI provides the `<cit>` (citation) element to group together a quotation with its bibliographic reference. Within `<cit>`, the quoted text is typically enclosed in `<quote>` (or `<q>`), and the bibliographic information is contained in a `<bibl>` (bibliographic reference) element. The `<bibl>` element itself is highly flexible and can contain various sub-elements like `<author>`, `<title>`, `<publisher>`, `<date>`, `<idno>` (for standard identifiers like ISBN or DOI), and more, allowing for rich and structured bibliographic data.

Here's an example of a formal citation:
```xml
<cit>
  <quote>The digital humanities is not merely a set of tools, but a critical methodology.</quote>
  <bibl>
    <author>Burdick, Anne et al.</author>, <title rend="italic">Digital Humanities</title> (<pubPlace>Cambridge, MA</pubPlace>: <publisher>MIT Press</publisher>, <date>201l</date>), <idno type="ISBN">9780262018471</idno>, p. 3.
  </bibl>
</cit>
```
This structure clearly links the quoted text to its precise source. The `@rend="italic"` on the title is a good example of how to handle presentational features within a semantic element.

A common interpretive pitfall is to confuse direct speech with reported speech. If a sentence says, "He said that he would go," this is reported speech and should not be enclosed in `<q>`. Only verbatim quotations should be marked with `<q>` or `<quote>`. Another mistake is to neglect the `@who` attribute for `<q>` or to provide insufficient detail in `<bibl>`, thereby losing valuable information about the source and speaker. Always strive for the highest level of detail and disambiguation possible, leveraging the full power of TEI's structured elements.

#### Key concepts
*   **`<q>` (inline quotation):** Used for short, inline direct speech or quotations that flow within a paragraph.
*   **`<quote>` (block quotation):** Used for longer quotations that are set off as a distinct block of text.
*   **`@who` (who attribute):** An attribute used with `<q>` to identify the speaker of the quotation, typically pointing to a `<person>` element in the `teiHeader`.
*   **`<cit>` (citation):** An element used to group together a quotation (or reference) with its bibliographic details.
*   **`<bibl>` (bibliographic reference):** An element used within `<cit>` to contain structured bibliographic information about a source, including `<author>`, `<title>`, `<publisher>`, `<date>`, etc.
*   **Reported Speech:** Speech that is paraphrased or summarized, not verbatim, and therefore not encoded with `<q>` or `<quote>`.

#### Hands-on activity
**Encoding Dialogue and a Literary Citation**

You are encoding a scene from a play script and a critical essay referencing it.

**Part 1: Dialogue**
Encode the following dialogue snippet. Assume "Hamlet" has the XML ID `#hamlet` and "Horatio" has `#horatio` in your `listPerson`.

> Hamlet: "To be, or not to be, that is the question."
> Horatio: "My lord, I do not understand."
> Hamlet: "It is a riddle, Horatio, a riddle."

**Part 2: Literary Citation**
Encode the following critical analysis that includes a block quote and its citation.

> In his seminal work, Stephen Greenblatt argues for the transformative power of performance:
>
> "Shakespeare's plays were not merely texts to be read, but living events that reshaped the consciousness of their audiences, creating new forms of social understanding and political engagement."
>
> This perspective highlights the dynamic interplay between text and context in early modern drama.
>
> **Citation:** Greenblatt, Stephen. *Shakespearean Negotiations: The Circulation of Social Energy in Renaissance England*. Berkeley: University of California Press, 1988, p. 5.

**Your Task:**
Encode both parts using `<q>`, `@who`, `<quote>`, `<cit>`, and `<bibl>` with appropriate sub-elements.

#### Assessment idea
1.  **Question:** You encounter the following sentence in a historical letter: "The Governor stated that he found the petition 'highly persuasive' and would consider its merits." How would you encode the phrase "highly persuasive" in TEI, and why?

    **Model Response:**
    The phrase "highly persuasive" should be encoded as `<q>highly persuasive</q>`.
    *   This is a direct, verbatim quotation embedded within reported speech ("The Governor stated that he found..."). The single quotation marks in the original text indicate that these specific words are being quoted directly, even if the surrounding context is reported.
    *   The `@who` attribute could be added if the Governor's XML ID is available (e.g., `<q who="#governor">highly persuasive</q>`), further clarifying the speaker.

2.  **Question:** Explain the primary difference in usage between `<q>` and `<quote>` in TEI. Provide a scenario where each would be appropriate.

    **Model Response:**
    The primary difference between `<q>` and `<quote>` lies in their scope and typical presentation:
    *   **`<q>` (inline quotation):** Used for shorter, inline quotations that are typically integrated within a paragraph of prose. It is often used for direct speech or short phrases.
        *   **Scenario:** In a novel, a character says: `He whispered, <q who="#john">"I'll meet you at dawn."</q> and vanished into the night.`
    *   **`<quote>` (block quotation):** Used for longer quotations that are typically set off from the main text as a distinct block, often with its own formatting (e.g., indentation). It can contain paragraphs or other block-level elements.
        *   **Scenario:** In a scholarly essay, an author presents a lengthy excerpt from a primary source:
            ```xml
            <p>The document concludes with a powerful plea for justice:</p>
            <quote>
              <p>Let it be known that the cries of the oppressed shall not go unheard, and the scales of justice, though slow, shall ultimately balance.</p>
            </quote>
            <p>This sentiment resonates throughout the entire collection of petitions.</p>
            ```

#### AI generation note
Create an 18-minute video lecture with a focus on practical application and common pitfalls. Begin by showing a historical newspaper article with direct quotes and block quotes highlighted. Use a split-screen approach: one side displays the original text, the other shows the TEI XML as the instructor annotates it. Emphasize the `@who` attribute for `<q>` by showing how it links to a `listPerson` in the `teiHeader`. Then, transition to explaining `<cit>` and `<bibl>`, demonstrating how to structure bibliographic information with sub-elements. Include a segment on "Common Mistakes: Reported vs. Direct Speech," using animated text examples to clarify. Conclude with a 5-minute interactive quiz where learners identify and correct errors in pre-encoded TEI snippets involving quotations and citations. Provide downloadable examples of well-formed `<cit>` and `<bibl>` structures.

---

### Chapter 4.4 — Notes and Annotations

#### Learning objectives
*   Identify and encode various types of notes (footnotes, endnotes, marginalia) using the `<note>` element.
*   Utilize the `@place`, `@n`, and `@resp` attributes of `<note>` to specify its location, numbering, and authorship.
*   Differentiate between authorial notes and editorial notes and encode them appropriately.
*   Employ the `<ref>` element to create internal and external cross-references within the TEI document.
*   Understand the importance of consistent note placement and linking for scholarly integrity.

#### Detailed lesson content
Notes and annotations are integral to scholarly communication, providing supplementary information, commentary, cross-references, or textual variants without interrupting the main flow of the text. In TEI, the `<note>` element is the primary tool for encoding these additions. Its versatility allows it to represent everything from traditional footnotes and endnotes to marginalia and even more complex critical apparatus entries.

The simplest use of `<note>` is to embed a note directly at the point of its reference within the text. For example: `<p>The Treaty of Versailles<note>Signed on 28 June 1919, formally ending World War I.</note> had profound consequences.</p>`. While this is valid, it's often more useful to provide additional metadata about the note, especially its placement and authorship.

The `@place` attribute is crucial for indicating where the note appears in the source document. Common values include `foot` (for footnotes), `end` (for endnotes), `margin` (for marginal notes), `inline` (for notes embedded within the text), `top` (for notes at the top of a page), or `bottom` (for notes at the bottom of a page). If a note has a number or symbol in the source, this can be recorded using the `@n` attribute (e.g., `<note n="1">...</note>`). This helps maintain fidelity to the original document's presentation.

A particularly important attribute is `@resp` (for "responsible"), which identifies the author or transcriber of the note. This allows for clear distinction between authorial notes (notes written by the original author of the text) and editorial notes (notes added by a later editor or transcriber). Like the `@who` attribute for `<q>`, `@resp` should point to an XML ID defined in the `teiHeader`'s `<listPerson>` or `<listOrg>` section. For example: `<note place="foot" n="*1" resp="#editorA">This passage appears to be a later addition.</note>`. This distinction is vital for critical editions, where understanding the origin of a note can inform interpretation.

Consider a page from a manuscript with both authorial footnotes and marginal comments by a later reader:
```xml
<p>The theory of humours<note place="foot" n="1" resp="#author">First proposed by Hippocrates.</note> dominated medical thought for centuries.</p>
<note place="margin" resp="#readerB">Query: What about Galen's contributions?</note>
```
Here, `note` elements accurately capture both types of annotations, distinguishing their placement and authorship.

Beyond standalone notes, texts frequently contain cross-references. The `<ref>` element is used to create a link from one point in the text to another, or to an external resource. The `@target` attribute of `<ref>` specifies the destination of the link. This target can be an internal XML ID within the same document (e.g., `<ref target="#ch2">Chapter 2</ref>`) or a URL to an external resource (e.g., `<ref target="http://example.com/glossary#term1">See glossary</ref>`). The `<ref>` element is incredibly powerful for building hyperlinked, navigable digital editions. It can be used to link a note reference mark in the main text to the full note text, or to link a term to its definition in an index.

A common mistake is to simply transcribe the note text without using the `@place`, `@n`, or `@resp` attributes, thereby losing valuable metadata about the note's context and origin. Another pitfall is to use `<note>` for what should be a more specific TEI element. For instance, if a note provides a textual variant, the `<app>` (apparatus entry) element, which we will cover in a later module, might be more appropriate. Always consider if a more specific semantic tag exists before defaulting to `<note>`. When encoding notes, consistency in your use of attributes and their values is paramount for the long-term utility and searchability of your TEI document.

#### Key concepts
*   **`<note>` (note):** The primary element for encoding supplementary information, commentary, or textual variants.
*   **`@place` (place attribute):** An attribute of `<note>` specifying its physical location in the source (e.g., `foot`, `end`, `margin`, `inline`).
*   **`@n` (number attribute):** An attribute of `<note>` to record the number or symbol associated with the note in the source.
*   **`@resp` (responsible attribute):** An attribute of `<note>` identifying the author or transcriber of the note, linking to a `<person>` or `<listOrg>` entry.
*   **Authorial Note:** A note written by the original author of the text.
*   **Editorial Note:** A note added by a later editor or transcriber.
*   **`<ref>` (reference):** An element used to create a link to another part of the document or an external resource.
*   **`@target` (target attribute):** An attribute of `<ref>` specifying the XML ID or URL of the link's destination.

#### Hands-on activity
**Encoding Notes and Cross-References in a Scholarly Edition**

You are working on a digital edition of a historical scientific paper. Encode the following excerpt, paying attention to the author's footnote, an editor's marginal comment, and an internal cross-reference.

**Original Text Excerpt:**
> The observed phenomenon<note n="1">This effect was first documented by Dr. Alistair Finch in 1887.</note> suggests a novel interaction between light and matter. Further research, as detailed in Section 3.2, is required to fully elucidate the mechanism.
>
> *[In the margin, a later editor has written:]* Possible link to quantum entanglement?

**Your Task:**
Encode this excerpt using `<p>`, `<note>`, `@place`, `@n`, `@resp`, and `<ref>`. Assume the author's ID is `#finchA` and the editor's ID is `#editorX`. Assume "Section 3.2" corresponds to an XML ID `#sec3_2`.

#### Assessment idea
1.  **Question:** You are encoding a medieval manuscript where a scribe has added a small drawing of a hand (a "manicule") pointing to a particularly important passage in the margin. How would you encode this visual annotation in TEI, ensuring you capture both its visual nature and its function?

    **Model Response:**
    This would be best encoded using the `<note>` element with specific attributes:
    ```xml
    <note type="manicule" place="margin" rend="hand-drawing" resp="#scribeY">
      <p>Points to an important passage.</p>
    </note>
    ```
    *   **`<note>`:** It's an annotation, so `<note>` is appropriate.
    *   **`type="manicule"`:** The `@type` attribute specifies the *kind* of annotation (a manicule).
    *   **`place="margin"`:** The `@place` attribute indicates its location.
    *   **`rend="hand-drawing"`:** The `@rend` attribute describes its visual rendering (a hand drawing).
    *   **`resp="#scribeY"`:** The `@resp` attribute identifies the scribe responsible for it.
    *   The content within the `<note>` can describe its function.

2.  **Question:** Explain the difference between using a `<note>` element and a `<ref>` element. Provide an example where each would be the correct choice.

    **Model Response:**
    *   **`<note>` (note):** The `<note>` element is used to contain supplementary information, commentary, or textual variants that are *part of the document's content* but distinct from the main flow. It's about providing additional textual material.
        *   **Example:** Encoding a footnote that explains an obscure historical term:
            `<p>The concept of <term>phlogiston</term><note place="foot">An unproven substance thought to be released during combustion.</note> was central to early chemistry.</p>`
    *   **`<ref>` (reference):** The `<ref>` element is used to create a *link* from one point in the text to another location, either within the same document or to an external resource. It's about creating navigational connections, not necessarily providing additional content itself (though the text within `<ref>` describes the link).
        *   **Example:** Linking to another section of the document:
            `<p>For a detailed discussion of this methodology, see <ref target="#sec_methodology">Section 3: Methodology</ref>.</p>`

#### AI generation note
Produce a 14-minute guided interactive reading. Display a page from a digitized scholarly edition (e.g., a critical edition of Shakespeare or a historical scientific text) that clearly features footnotes, endnotes, and marginalia. Use animated highlights and zoom-ins to identify each type of note. A voiceover explains the TEI encoding for each, focusing on `@place`, `@n`, and `@resp`. Show how `@resp` links to a `listPerson` entry. Then, demonstrate the `<ref>` element by highlighting a cross-reference in the text and showing its `@target` attribute linking to an internal XML ID. Include a "spot the note" interactive exercise where learners click on different types of notes in a new document excerpt and select the correct TEI tag and attributes from a multiple-choice list. Provide a downloadable checklist for encoding notes and references.

---

### Chapter 4.5 — Names, Dates, and Places

#### Learning objectives
*   Identify and accurately encode personal names, place names, and dates using specific TEI elements.
*   Utilize attributes like `@key`, `@ref`, `@when`, `@from`, and `@to` to provide disambiguation and structured data for named entities and dates.
*   Understand the importance of linking named entities to authority files (e.g., VIAF, GeoNames) for interoperability and disambiguation.
*   Differentiate between various date formats and apply appropriate encoding for precision and machine readability.
*   Avoid common pitfalls related to inconsistent naming conventions and ambiguous date representations.

#### Detailed lesson content
One of the most powerful aspects of TEI encoding, particularly for historical and literary texts, is the ability to semantically mark up named entities such as people, places, and dates. This goes far beyond simply italicizing a name; it allows for the creation of structured data that can be queried, analyzed, and linked to external knowledge bases, transforming flat text into rich, interconnected information.

For personal names, the `<persName>` element is used. This element should enclose the full name of an individual. To enhance its utility, several attributes are crucial. The `@key` attribute can be used to provide a canonical, machine-readable identifier for the person, especially useful for distinguishing individuals with similar names. For instance, if you have multiple "John Smiths" in your text, `@key="smith_john_1"` and `@key="smith_john_2"` could differentiate them. Even more powerful is the `@ref` attribute, which allows you to link the `<persName>` to an external authority file, such as the Virtual International Authority File (VIAF) or a project-specific prosopography. For example, `<persName ref="http://viaf.org/viaf/98471927">William Shakespeare</persName>` provides a persistent, globally recognized identifier for the Bard. This linking is fundamental for data interoperability and for building robust knowledge graphs.

Similarly, for place names, the `<placeName>` element is used. It functions much like `<persName>`, with `@key` for internal disambiguation and `@ref` for linking to external gazetteers like GeoNames. For instance, `<placeName ref="http://www.geonames.org/2643743">London</placeName>` provides a stable identifier for the city. Encoding place names accurately allows for geographical analysis, mapping, and the study of spatial relationships within a text.

Consider an excerpt from a historical travelogue:
```xml
<p>Our journey began in <placeName ref="http://www.geonames.org/2988507">Paris</placeName>, where we met with <persName ref="http://viaf.org/viaf/123456789">Monsieur Dubois</persName>, a renowned cartographer.</p>
```
This encoding not only identifies the place and person but also provides machine-readable links to their authoritative records.

Dates are another critical category of named entities, and TEI offers sophisticated ways to encode them using the `<date>` element. The simplest use is to wrap a date string: `<date>14 July 1789</date>`. However, for machine readability and analysis, the `@when` attribute is indispensable. This attribute takes a canonical date in ISO 8601 format (YYYY-MM-DD), ensuring unambiguous interpretation. So, `<date when="1789-07-14">14 July 1789</date>` allows software to sort and filter dates accurately, regardless of how they are presented in the original text. For periods or date ranges, the `@from` and `@to` attributes can be used, both also in ISO 8601 format. For example, `<date from="1914" to="1918">the Great War (1914-1918)</date>` precisely defines the temporal span. For times, the `<time>` element can be used, often with a `@when` attribute for ISO 8601 time (HH:MM:SS).

A common pitfall in encoding names is inconsistency. If "Shakespeare" appears as "Wm. Shakespeare" or "Shakspeare" in the text, it's vital to consistently link all variants to the same `<persName>` entry (or to the same `@key` and `@ref` values). Another mistake is to encode only the visual representation of a date without providing the machine-readable `@when` attribute, thereby losing the analytical power of structured data. For ambiguous dates (e.g., "early spring 1800"), you might use `@notBefore` and `@notAfter` attributes to specify a range of possible dates, or even `@certainty` to indicate the level of confidence. The goal is always to move beyond mere transcription to create semantically rich data that supports advanced research questions.

#### Key concepts
*   **`<persName>` (personal name):** An element used to mark the name of a person.
*   **`<placeName>` (place name):** An element used to mark the name of a geographical place.
*   **`<date>` (date):** An element used to mark a date.
*   **`<time>` (time):** An element used to mark a time.
*   **`@key` (key attribute):** An attribute used with named entity elements to provide a canonical, project-specific identifier for disambiguation.
*   **`@ref` (reference attribute):** An attribute used with named entity elements to link to external authority files (e.g., VIAF for persons, GeoNames for places).
*   **`@when` (when attribute):** An attribute of `<date>` or `<time>` that provides a machine-readable date/time in ISO 8601 format (YYYY-MM-DD or HH:MM:SS).
*   **`@from` (from attribute):** An attribute of `<date>` specifying the start of a date range in ISO 8601 format.
*   **`@to` (to attribute):** An attribute of `<date>` specifying the end of a date range in ISO 8601 format.
*   **ISO 8601:** An international standard for the representation of dates and times.
*   **Authority Files:** Standardized lists of names, places, or subjects used to ensure consistency and disambiguation.

#### Hands-on activity
**Encoding Entities in a Historical Letter**

You are encoding a letter from a 19th-century figure. Transcribe and encode the following snippet, paying close attention to names, places, and dates.

**Original Text Excerpt:**
> My Dearest Elizabeth,
>
> I arrived in London on the tenth of May, 1845, after a rather arduous journey from Edinburgh. The city is bustling, as always. I met with Mr. Charles Dickens yesterday, and he seemed in good spirits, discussing his latest work. I plan to return to my estate in Kent by the end of next month.
>
> Yours,
> Arthur

**Your Task:**
Encode all personal names, place names, and dates using `<persName>`, `<placeName>`, `<date>`, and their relevant attributes (`@ref`, `@when`, `@from`, `@to`). Assume the following (you don't need to define these in the header for this exercise, just use them):
*   Elizabeth: `#elizabeth_arthur`
*   London: `http://www.geonames.org/2643743`
*   Edinburgh: `http://www.geonames.org/2650226`
*   Charles Dickens: `http://viaf.org/viaf/88742636`
*   Kent: `http://www.geonames.org/2646271`
*   Arthur: `#arthur_correspondent`

#### Assessment idea
1.  **Question:** You are encoding a historical document that mentions "the year of our Lord 1666," referring to the Great Fire of London. How would you encode this phrase to ensure both human readability and machine-readability for chronological sorting?

    **Model Response:**
    ```xml
    <date when="1666">the year of our Lord 1666</date>
    ```
    *   **`<date>`:** This element correctly identifies the phrase as a date.
    *   **`when="1666"`:** The `@when` attribute provides the machine-readable ISO 8601 representation of the year, allowing for accurate chronological sorting and filtering by software, regardless of the textual variations in the original.

2.  **Question:** A text mentions "Dr. Johnson" several times. Without further context, it's unclear if this refers to Samuel Johnson (the lexicographer) or another contemporary physician named Johnson. How would you encode the first instance of "Dr. Johnson" to acknowledge this ambiguity while still marking it as a personal name? What attribute would be particularly useful here, and why?

    **Model Response:**
    ```xml
    <persName key="johnson_dr_ambiguous">Dr. Johnson</persName>
    ```
    *   **`<persName>`:** This correctly identifies the entity as a personal name.
    *   **`key="johnson_dr_ambiguous"`:** The `@key` attribute is particularly useful here. It allows the encoder to assign a unique, project-specific identifier to this specific instance of "Dr. Johnson" without definitively linking it to a known authority file. This signals that while it's a personal name, its identity is currently ambiguous or unresolved. If later research clarifies the identity, the `@key` could be updated or a `@ref` attribute added. Other attributes like `@cert` (certainty) could also be used to explicitly state the level of certainty.

#### AI generation note
Design a 16-minute interactive module focusing on entity recognition and disambiguation. Start with a visual of a historical map or a page from a census record. Use animated overlays to highlight names, dates, and places. Explain the `<persName>`, `<placeName>`, and `<date>` elements, emphasizing the importance of `@key` and `@ref` attributes. Demonstrate how to find and use VIAF and GeoNames IDs with a live browser walkthrough. For dates, show various textual date formats (e.g., "the 3rd of March," "Anno Domini 1700") and how they map to the ISO 8601 `@when` attribute. Include a drag-and-drop exercise where learners match textual entities from a new document excerpt to pre-defined TEI tags with correct attributes and authority file links. Provide a downloadable guide to common ISO 8601 date formats and links to key authority files.

---

### Chapter 4.6 — 
*   Utilize attributes like `@resp`, `@cert`, and `@reason` to provide metadata about editorial changes and textual uncertainty.
*   Represent textual uncertainty, illegibility, or damage using `<unclear>`, `<supplied>`, `<gap>`, and `<damage>` elements.
*   Understand the principles of critical editing and diplomatic transcription in the context of TEI.
*   Avoid common pitfalls of over-editing or failing to record the nature and responsibility for textual changes.

#### Detailed lesson content
When working with manuscripts, historical documents, or even heavily edited modern texts, encoders frequently encounter instances where the text is not pristine. There might be deletions, insertions, 
*   The `<add>` element (for "addition") marks text that has been added to the source, typically above the line, in the margin, or as an interlinear insertion. For example, `The house was <add place="above">newly</add> painted.` The `@place` attribute (e.g., `place="margin"`, `place="above"`, `place="inline"`) is particularly useful here to indicate where the addition appears.
*   The `<corr>` element (for "* a change was made (e.g., `reason="authorial revision"`, `reason="scribal error"`).

Beyond explicit changes, texts can also be uncertain or damaged.
*   The `<unclear>` element marks text that is difficult or impossible to read in the source. The `@reason` attribute can explain why (e.g., `reason="faded ink"`, `reason="smudged"`).
*   The `<supplied>` element marks text that has been supplied by the editor because it is missing or illegible in the source. This is crucial for reconstructing lacunae. For example, `The <supplied resp="#editorX">king</supplied> rode forth.` The `@reason` attribute can explain the basis for the supply (e.g., `reason="conjecture"`, `reason="parallel passage"`).
*   The `<gap>` element marks a point where material is omitted from a transcription, usually because it is illegible, lost, or deliberately not transcribed. The `@reason` attribute (e.g., `reason="illegible"`, `reason="page_torn"`) and `@quantity` (e.g., `quantity="5" unit="words"`) are helpful here.
*   The `<damage>` element describes a physical defect in the source that affects the text, often containing `<gap>` or `<unclear>` elements within it.

Consider this complex example from a manuscript:
```xml
<p>The <del rend="strikethrough" resp="#author">original</del> <add place="above" resp="#author">final</add> decision was made on <date when="1701-03-15">March 15, 1701</date>. A crucial clause was <unclear reason="faded ink" cert="low">illegible</unclear> in the manuscript, but we <supplied resp="#editorY" reason="conjecture">believe it stated</supplied> a new tax.</p>
```
This encoding meticulously records the author's * that has been corrected. For variations that are not necessarily errors but simply different readings, other elements like `<app>` (critical apparatus entry) are more appropriate, which we will explore later. The principle here is to be transparent about all editorial decisions and textual uncertainties, allowing future researchers to understand the document's complexities and the editorial process.

#### Key concepts
*   **`<del>` (deletion):** Marks text that has been deleted or struck out in the source.
*   **`<add>` (addition):** Marks text that has been added to the source (e.g., interlinear, marginal).
*   **`<corr>` (* Marks a passage where an encoder has corrected an obvious error in the source. Often used with `<sic>`.
*   **`<sic>` (sic):** Marks text as it appears in the source, even if it is incorrect or unusual.
*   **`<unclear>` (unclear):** Marks text that is difficult or impossible to read in the source.
*   **`<supplied>` (supplied):** Marks text that has been supplied by the editor because it is missing or illegible in the source.
*   **`<gap>` (gap):** Marks a point where material is omitted from a transcription due to illegibility, loss, or deliberate omission.
*   **`<damage>` (damage):** Describes a physical defect in the source that affects the text.
*   **`@resp` (responsible attribute):** Identifies the person responsible for the change or interpretation.
*   **`@cert` (certainty attribute):** Expresses the encoder's certainty about a reading or change.
*   **`@reason` (reason attribute):** Explains the basis or cause for a change, uncertainty, or omission.
*   **Diplomatic Transcription:** A transcription that aims to reproduce the source text as exactly as possible, including all its features and irregularities.
*   **Critical Editing:** The process of producing a scholarly edition of a text, often involving *Encoding Editorial Interventions in a Manuscript Fragment**

You are transcribing a fragment of a handwritten letter where the author has made several changes.

**Original Text Excerpt:**
> My dear <del rend="strikethrough">friend</del> <add place="above">sister</add>,
> I hope this letter finds you well. I have been <unclear reason="ink_blot">thinking</unclear> of our last meeting. The weather here is quite <sic>unpredicteble</sic><corr>unpredictable</corr>. There was a <gap quantity="3" unit="words" reason="tear_in_paper"/> in the document, making it hard to understand.
>
> Yours,
> [Signature illegible due to water damage]

**Your Task:**
Encode this excerpt using `<del>`, `<add>`, `<unclear>`, `<sic>`, `<corr>`, `<gap>`, and `<damage>`. Assume the author's ID is `#writerA` and the modern editor's ID is `#editorZ`.

#### Assessment idea
1.  **Question:** A transcriber is working on a 16th-century manuscript where the word "the" is clearly written as "ye" (using the thorn character, which looks like a 'y'). The transcriber wants to create a reading text for modern audiences but also wants to preserve the original spelling for scholarly purposes. How would you encode this specific instance of "ye" in TEI to achieve both goals?

    **Model Response:**
    ```xml
    <sic resp="#scribeA">ye</sic><corr resp="#editorX">the</corr>
    ```
    *   **`<sic>`:** This element explicitly marks the original reading "ye" as it appears in the source, preserving the diplomatic transcription. The `@resp` attribute can identify the original scribe.
    *   **`<corr>`:** This element provides the modern corrected or normalized reading "the," which can be displayed in a reading text. The `@resp` attribute identifies the modern editor making the *Question:** Explain the difference between `<unclear>` and `<gap>`. Provide a scenario for each.

    **Model Response:**
    *   **`<unclear>` (unclear):** This element is used when text is present in the source but is difficult or impossible to read. The *space* for the text exists, but its content is uncertain.
        *   **Scenario:** A manuscript page has a word where the ink has faded significantly, making it impossible to confidently decipher the letters.
            `<p>The old map showed a path to the <unclear reason="faded_ink">hidden</unclear> treasure.</p>`
    *   **`<gap>` (gap):** This element is used when material is *omitted* from the transcription, either because it is entirely missing from the source (e.g., a torn page) or because the transcriber has deliberately chosen not to transcribe it (e.g., an untranscribed drawing). The *space* for the text might or might not exist, but the textual content is absent in the transcription.
        *   **Scenario:** A section of a letter is torn away, and several words are completely lost.
            `<p>I regret to inform you that <gap quantity="5" unit="words" reason="tear_in_paper"/> has occurred.</p>`

---

## Module 5: Representing Complex Textual Phenomena

This module delves into the sophisticated capabilities of the Text Encoding Initiative (TEI) for capturing the intricate details and complexities inherent in scholarly texts. Moving beyond basic structural markup, we will explore how TEI provides robust mechanisms to represent textual variation, named entities, linguistic features, and the physical characteristics of source materials, empowering digital humanists to create richly annotated and analytically powerful editions.

### Chapter 5.1 — Encoding Manuscript Description and Palaeography

#### Learning objectives
*   Identify and apply TEI elements for describing the physical characteristics of manuscripts, including codicological features.
*   Understand how to encode palaeographical details such as scripts, hands, and scribal interventions.
*   Differentiate between elements used for structural description and those for detailed physical and palaeographical annotation.
*   Utilize TEI attributes to provide precise metadata about manuscript components and their historical context.
*   Recognize common pitfalls in encoding manuscript descriptions and strategies for ensuring consistency and interoperability.

#### Detailed lesson content
When we engage with historical documents, especially manuscripts, we are not merely interacting with text; we are confronting physical objects that bear the marks of their creation, use, and transmission. The Text Encoding Initiative (TEI) offers a powerful suite of elements designed to capture these material realities, moving beyond the purely linguistic to encompass the codicological and palaeographical dimensions of a text. This is crucial for scholarly editing, as the physical form of a document often provides vital clues about its origin, authority, and interpretive history. For instance, the type of parchment, the ruling pattern, the binding, or the specific script used can all inform our understanding of a text's context and meaning.

The ` <msDesc> ` element, found within the ` <teiHeader> ` and specifically within ` <sourceDesc> `, serves as the primary container for describing a manuscript or a collection of manuscripts. It acts as a digital catalogue entry, allowing for a structured and machine-readable representation of what a traditional library or archival description would contain. Within ` <msDesc> `, we encounter elements like ` <msIdentifier> ` for unique identification (e.g., library, shelfmark), ` <head> ` for a title, and ` <msContents> ` for detailing the works contained within the manuscript. But the true power for physical description lies in ` <physDesc> ` (physical description) and ` <history> ` (history of the manuscript).

Consider a medieval manuscript: its ` <physDesc> ` might include ` <objectDesc> ` to describe the object as a whole (e.g., a codex, a roll), ` <supportDesc> ` for the material (parchment, paper), ` <extent> ` for its dimensions and number of leaves, and ` <layoutDesc> ` for describing the text block's layout (number of columns, lines per page, ruling patterns). For example, a description might detail a manuscript as a "vellum codex, 250 x 170 mm, 200 folios, two columns, 30 lines per column, ruled in drypoint." Each of these details can be precisely encoded using TEI. The ` <supportDesc> ` element itself contains ` <support> ` (e.g., `<support type="material">parchment</support>`) and ` <foliation> ` to describe the numbering system. The ` <decoDesc> ` element allows for the description of decoration, including initials, miniatures, and borders, specifying their type, style, and content. This level of detail is paramount for researchers studying manuscript production, art history, and the economics of bookmaking.

Beyond the general physical description, TEI offers granular control for palaeographical features, which concern the study of historical handwriting. Within ` <physDesc> `, the ` <handDesc> ` element is dedicated to describing the hands present in a manuscript. A single manuscript might have multiple scribes, or a scribe might use different scripts for different parts of the text (e.g., main text in Gothic Textura, rubrics in a more cursive hand). The ` <handNote> ` element within ` <handDesc> ` allows us to describe each distinct hand, specifying its characteristics (` @script `, ` @style `, ` @scribe `), and even linking to external authority files for known scribes or script types using ` @ref `. For instance, we might have `<handNote xml:id="handA" script="Gothic Textura" style="formal" scribe="Scribe1">Main hand, formal Gothic Textura.</handNote>` and then later refer to this hand using ` @hand="#handA" ` on specific ` <p> ` or ` <l> ` elements to indicate which parts of the text were written by which hand. This is particularly useful for collaborative projects or for identifying the work of a specific scriptorium.

Common mistakes in encoding manuscript descriptions often involve a lack of specificity or consistency. For example, simply stating "vellum" without specifying the quality, thickness, or preparation might miss crucial information. Similarly, describing a script as "Gothic" is often insufficient; specifying "Gothic Textura Quadrata" or "Bastarda" provides far more analytical precision. Another pitfall is failing to use ` @xml:id ` and ` @ref ` attributes effectively. These attributes are not merely optional additions; they are fundamental for creating machine-readable, interoperable, and linkable data. By assigning unique ` @xml:id ` values to each ` <handNote> ` or ` <decoNote> ` and using ` @ref ` to point to established ontologies or authority files (like the Getty Vocabularies for art historical terms or a custom list of scribes), we move from merely describing to semantically enriching our data. This allows for complex queries, such as "find all manuscripts written by Scribe X using Gothic Textura" or "find all manuscripts with initials in a specific style."

The scholarly caution here is to avoid over-encoding or under-encoding. While TEI offers immense detail, not every project requires the same level of granularity. The encoding scheme should be driven by the research questions. If your project focuses on textual transmission, the exact dimensions of every folio might be less critical than the identification of scribal hands and their interventions. Conversely, if you are studying the economics of medieval book production, precise measurements and material descriptions become paramount. Always consider the balance between the effort of encoding and the analytical gains. Furthermore, remember that TEI provides a framework, but consistent application within a project often requires developing a project-specific schema or customization (via ODD files) and clear encoding guidelines to ensure that all encoders interpret and apply the elements and attributes in the same way. This standardization is key to producing reliable and reusable scholarly data.

#### Key concepts
*   **` <msDesc> `:** The primary TEI element for describing a manuscript or a collection of manuscripts, typically found within ` <sourceDesc> ` in the ` <teiHeader> `.
*   **` <physDesc> `:** An element within ` <msDesc> ` used to describe the physical characteristics of a manuscript, such as material, dimensions, layout, and decoration.
*   **` <handDesc> `:** An element within ` <physDesc> ` dedicated to describing the different scribal hands present in a manuscript, including script types and individual scribes.
*   **` <handNote> `:** A sub-element of ` <handDesc> ` used to describe a specific hand, often identified with an ` @xml:id ` and linked to textual passages using ` @hand `.
*   **Codicology:** The study of books as physical objects, especially manuscripts, focusing on their material, construction, binding, and layout.
*   **Palaeography:** The study of historical handwriting, including the identification of scripts, scribes, and dating of documents.
*   **` @xml:id `:** A universal XML attribute used to provide a unique identifier for any element, crucial for linking and referencing within and across documents.
*   **` @ref `:** An attribute used to point to an external resource or authority file, providing semantic enrichment and interoperability.

#### Hands-on activity
**Encoding a Manuscript Excerpt's Physical and Palaeographical Features**

Imagine you are encoding a fragment from a medieval manuscript. You have the following observations:
*   The fragment is part of a larger codex, written on parchment.
*   It measures 150 x 100 mm.
*   There are 25 lines of text per page, in a single column.
*   The main text is in a formal Gothic Textura script, written by an unknown scribe (let's call them "Scribe X").
*   There's a rubric (a heading in red ink) at the top, written in a more cursive hand, likely by the same scribe but in a different style, or possibly a different scribe (let's call them "Scribe Y").
*   The first letter of the main text is an illuminated initial, depicting a dragon.

Your task is to create a ` <msDesc> ` section within a ` <teiHeader> ` that captures these details. Focus on ` <physDesc> ` and ` <handDesc> `.

```xml
<teiHeader>
  <fileDesc>
    <titleStmt>
      <title>Fragment of a Medieval Text</title>
    </titleStmt>
    <publicationStmt>
      <p>Unpublished scholarly edition.</p>
    </publicationStmt>
    <sourceDesc>
      <msDesc xml:id="frag001">
        <msIdentifier>
          <settlement>Imaginary City</settlement>
          <repository>Digital Library of Medieval Fragments</repository>
          <idno>DLMF/Frag/001</idno>
        </msIdentifier>
        <msContents>
          <summary>A fragment containing a portion of a theological treatise.</summary>
          <textLang mainLang="lat">Latin</textLang>
        </msContents>
        <physDesc>
          <objectDesc form="codex">
            <supportDesc material="parchment">
              <support>High-quality vellum.</support>
              <extent unit="mm">
                <dimensions>
                  <height quantity="150"/>
                  <width quantity="100"/>
                </dimensions>
              </extent>
            </supportDesc>
            <layoutDesc>
              <layout columns="1" writtenLines="25">
                <p>Single column, 25 lines per page.</p>
              </layout>
            </layoutDesc>
          </objectDesc>
          <handDesc>
            <!-- Your task: Add handNote elements for Scribe X and Scribe Y -->
            <!-- Scribe X: formal Gothic Textura -->
            <!-- Scribe Y: cursive hand for rubric -->
          </handDesc>
          <decoDesc>
            <!-- Your task: Add a decoNote for the illuminated initial -->
          </decoDesc>
        </physDesc>
        <history>
          <acquisition>Acquired in 2023 from a private collection.</acquisition>
        </history>
      </msDesc>
    </sourceDesc>
  </fileDesc>
</teiHeader>
```

#### Assessment idea
1.  **Question:** You are encoding a Renaissance manuscript. It has two distinct hands: the main text is in a humanistic cursive, and marginal annotations are in a later, more informal hand. How would you represent these two hands using TEI, specifically within the ` <handDesc> ` element? Provide the TEI XML snippet.

    **Model Response:**
    ```xml
    <handDesc>
      <handNote xml:id="hand_main" script="humanistic cursive" scope="major">
        The main text hand, a formal humanistic cursive.
      </handNote>
      <handNote xml:id="hand_marginal" script="informal" style="later" scope="minor">
        A later, informal hand used for marginal annotations.
      </handNote>
    </handDesc>
    ```
    *Rubric:* Full credit for correctly using ` <handDesc> ` and ` <handNote> ` elements, assigning unique ` @xml:id ` attributes, and describing the ` @script ` and ` @style ` for each hand. Partial credit for correct elements but missing attributes or descriptions.

2.  **Question:** Explain the difference between ` <physDesc> ` and ` <history> ` within ` <msDesc> `. Why is it important to distinguish between these two in scholarly encoding?

    **Model Response:**
    ` <physDesc> ` (physical description) is used to describe the intrinsic, material characteristics of the manuscript itself at the time of its creation or as it currently exists. This includes details like the type of support (parchment, paper), dimensions, layout, script, and decoration. It answers questions about "what the manuscript *is* physically." In contrast, ` <history> ` describes the extrinsic historical journey of the manuscript, such as its provenance, acquisition history, previous owners, and any significant events in its life after creation. It answers questions about "what has *happened* to the manuscript."

    It's crucial to distinguish between them because they capture different, albeit related, types of metadata essential for scholarly inquiry. ` <physDesc> ` informs studies of manuscript production, scribal practices, and material culture, while ` <history> ` is vital for understanding textual transmission, patronage, and the social life of texts. Combining them would obscure these distinct analytical categories and make it harder for researchers to query specific aspects of a manuscript's identity.

#### AI generation note
Create a 15-minute video lecture. Begin with a visual introduction to a medieval manuscript (e.g., a page from the Book of Kells or a similar richly decorated manuscript) with a voiceover explaining the concept of a manuscript as a physical object. Then, transition to a split-screen view: the left side shows a TEI XML structure for ` <msDesc> ` and its sub-elements, while the right side displays corresponding images or animated overlays illustrating each described feature (e.g., a close-up of parchment texture for ` <supportDesc> `, a diagram of column layout for ` <layoutDesc> `, different script examples for ` <handDesc> `). Include a segment demonstrating how ` @xml:id ` and ` @ref ` attributes link to external authorities or internal elements. Conclude with a 3-minute interactive coding challenge where learners fill in missing ` <handNote> ` and ` <decoNote> ` elements in a provided XML snippet, followed by a model answer reveal. Ensure all visuals have alt text and the video has full captions.

### Chapter 5.2 — Representing Textual Variation and Critical Apparatus

#### Learning objectives
*   Explain the fundamental principles of textual criticism and its relevance to digital scholarly editing.
*   Identify and correctly apply TEI elements for encoding textual variation, specifically ` <app> ` and ` <rdg> `.
*   Distinguish between different types of variant readings (substantive, orthographic, accidental) and encode them appropriately.
*   Understand the structure of a TEI-encoded critical apparatus, including the use of ` <lem> ` and ` <wit> `.
*   Analyze common challenges in representing complex textual stemmata and editorial choices in TEI.

#### Detailed lesson content
Textual variation is the very heartbeat of scholarly editing. No two copies of a historical text are ever identical, and the discrepancies between them—whether deliberate changes, accidental errors, or scribal interventions—form the raw material for textual criticism. The goal of textual criticism, broadly speaking, is to establish the most authoritative or historically significant text, often by reconstructing an archetype or by presenting a diplomatic edition that faithfully represents a specific source. In the digital realm, the Text Encoding Initiative (TEI) provides a sophisticated and standardized framework for representing these variations, moving beyond the static, print-based critical apparatus to create dynamic, queryable, and analytically rich digital editions.

At the core of TEI's approach to textual variation are the ` <app> ` (apparatus entry) and ` <rdg> ` (reading) elements. The ` <app> ` element serves as a container for all variant readings at a specific point in the text. It marks a location where the text differs across witnesses (manuscripts, early printed editions, etc.). Within ` <app> `, we typically find one or more ` <rdg> ` elements, each representing a distinct reading. One of these ` <rdg> ` elements might be designated as the ` <lem> ` (lemma), which is the reading chosen by the editor as the main text, or the base text from a specific witness. All other ` <rdg> ` elements represent alternative readings.

Let's consider a simple example from a hypothetical medieval text: "The quick brown fox jumps over the lazy dog." If one manuscript reads "foxe" instead of "fox," and another omits "brown," we would encode this as follows:

```xml
<p>The quick <app>
  <lem wit="#msA">brown</lem>
  <rdg wit="#msB">quick</rdg>
</app> <app>
  <lem wit="#msA">fox</lem>
  <rdg wit="#msC">foxe</rdg>
</app> jumps over the lazy dog.</p>
```
Here, ` @wit ` (witness) is a crucial attribute, pointing via ` @xml:id ` to the ` <msDesc> ` entries in the ` <teiHeader> ` that describe the specific manuscripts or editions (`#msA`, `#msB`, `#msC`). This allows for precise attribution of each reading to its source. The ` <lem> ` element explicitly marks the reading chosen for the main text, while ` <rdg> ` marks the alternative. It's important to note that the ` <lem> ` can also be implicitly the text outside the ` <app> ` element if no ` <lem> ` is explicitly given inside, but explicit ` <lem> ` is often preferred for clarity.

The complexity grows when we consider different types of variants. Substantive variants involve changes in meaning (e.g., "god" vs. "good"). Orthographic variants are differences in spelling that don't alter meaning (e.g., "colour" vs. "color"). Accidental variants include punctuation, capitalization, or word division. While TEI doesn't strictly enforce a specific typology within the ` <app> ` structure, the ` @type ` attribute on ` <rdg> ` or ` <app> ` can be used to categorize variants (e.g., ` <rdg type="orthographic">foxe</rdg> `). This allows for more granular analysis and filtering of the apparatus.

A significant challenge in scholarly editing is representing the relationships between witnesses, often depicted in a stemma (a genealogical tree of manuscripts). While TEI doesn't directly encode the stemma itself, the meticulous encoding of witnesses and their variants, coupled with ` <listWit> ` in the ` <teiHeader> ` to declare all witnesses and their ` @xml:id `s, provides the underlying data from which stemmatic relationships can be inferred or visualized by external tools. The ` <listWit> ` element, containing multiple ` <witness> ` elements, is where each manuscript or edition is formally declared, often with a ` <ptr> ` or ` <ref> ` pointing to its full ` <msDesc> ` or ` <bibl> ` entry.

A common pitfall for beginners is to encode every single difference as a variant, leading to an unwieldy and unreadable apparatus. Scholarly judgment is paramount here. Editors must decide what constitutes a significant variant worth noting. Minor orthographic differences, for instance, might be regularized or noted only if they reveal something about a scribe's dialect or period. Another mistake is inconsistent application of ` @wit ` attributes, which can lead to ambiguity about which witness supports which reading. Always ensure that every ` <rdg> ` (and ` <lem> ` if explicit) has a corresponding ` @wit ` attribute pointing to a declared witness.

The theoretical framework underpinning this TEI approach is largely aligned with the principles of analytical bibliography and textual criticism, which emphasize the material transmission of texts and the reconstruction of their histories. By encoding variants, we are not just presenting differences; we are building a dataset that allows scholars to trace the evolution of a text, identify scribal habits, and understand the processes of copying and revision. This moves beyond merely presenting a "best text" to offering a rich environment for exploring the entire textual tradition. The digital critical apparatus, unlike its print counterpart, can be dynamic, allowing users to switch between base texts, filter variants by witness or type, and even generate custom editions on the fly. This interactivity fundamentally transforms how scholars engage with textual instability and editorial decision-making.

#### Key concepts
*   **Textual Criticism:** The scholarly discipline concerned with identifying, evaluating, and establishing the most accurate or historically significant text from multiple variant copies.
*   **Critical Apparatus:** A section in a scholarly edition that presents variant readings from different witnesses, allowing readers to see how the text differs across sources.
*   **` <app> ` (apparatus entry):** A TEI element that marks a point in the text where there is variation across witnesses, serving as a container for different readings.
*   **` <rdg> ` (reading):** A TEI element representing a specific variant reading within an ` <app> ` element.
*   **` <lem> ` (lemma):** A TEI element within ` <app> ` that explicitly marks the reading chosen by the editor as the main text or base text.
*   **` @wit ` (witness):** An attribute used on ` <rdg> ` or ` <lem> ` to point to the ` @xml:id ` of the manuscript or edition that supports that particular reading.
*   **` <listWit> `:** An element in the ` <teiHeader> ` used to declare all witnesses (manuscripts, editions) consulted for the edition, each within a ` <witness> ` element.
*   **Stemma:** A genealogical tree illustrating the hypothesized relationships and descent of manuscripts or editions in a textual tradition.

#### Hands-on activity
**Encoding a Complex Variant Reading**

You are editing a passage where the word "heaven" appears. You have three witnesses:
*   **MS A:** Reads "heven" (the base text you've chosen).
*   **MS B:** Reads "heauen".
*   **Printed Edition X:** Reads "heavens" (plural).

Additionally, at a later point in the same sentence, the phrase "and earth" appears.
*   **MS A:** Reads "and earth".
*   **MS B:** Omits "and earth".
*   **Printed Edition X:** Reads "and the earth".

Your task is to encode these two variant points in the following sentence using ` <app> `, ` <lem> `, ` <rdg> `, and ` @wit `. Assume you have already declared your witnesses in ` <listWit> ` with ` @xml:id ` values ` #msA `, ` #msB `, ` #printX `.

```xml
<p>From <app>
  <!-- Encode the variation for "heaven" here -->
</app> above, the light shone down <app>
  <!-- Encode the variation for "and earth" here -->
</app>.</p>
```

#### Assessment idea
1.  **Question:** Consider the following TEI snippet:
    ```xml
    <p>The <app>
      <rdg wit="#ms1">old</rdg>
      <rdg wit="#ms2">ancient</rdg>
      <lem wit="#ms3">aged</lem>
    </app> book lay open.</p>
    ```
    a) Which reading has the editor chosen as the main text?
    b) Which witness supports the reading "old"?
    c) If ` #ms1 ` is a 12th-century manuscript, ` #ms2 ` is a 15th-century manuscript, and ` #ms3 ` is an early printed edition, what might this choice of lemma suggest about the editor's priorities?

    **Model Response:**
    a) The editor has chosen "aged" as the main text, indicated by the ` <lem> ` element.
    b) The witness ` #ms1 ` supports the reading "old".
    c) This choice of lemma (` #ms3 `, an early printed edition) suggests that the editor might be prioritizing a later, possibly more widely disseminated or 'standardized' version of the text, rather than an earlier manuscript tradition. It could indicate a focus on the text's reception history or a preference for a version perceived as more complete or polished, rather than attempting to reconstruct the earliest possible form.

2.  **Question:** You are encoding a dramatic text where a character's speech is slightly different across two early printed editions. Edition A has "Alas, my lord!" while Edition B has "Alas, good lord!". How would you encode this variant, assuming Edition A is your base text, and what attribute would you use to link to the editions?

    **Model Response:**
    ```xml
    <sp>
      <speaker>Character Name</speaker>
      <p>Alas, <app>
        <lem wit="#editionA">my</lem>
        <rdg wit="#editionB">good</rdg>
      </app> lord!</p>
    </sp>
    ```
    The attribute used to link to the editions is ` @wit `. This attribute's value (` #editionA `, ` #editionB `) would refer to the ` @xml:id `s of the respective ` <bibl> ` or ` <witness> ` entries declared in the ` <teiHeader> `'s ` <listWit> `.

#### AI generation note
Produce a 12-minute interactive reading walkthrough. Display a passage of text with an embedded TEI critical apparatus. The video should start by explaining the concept of textual variation and the purpose of a critical apparatus. Then, use animated overlays to highlight ` <app> `, ` <lem> `, ` <rdg> `, and ` @wit ` elements as the instructor explains their function. Present a specific example from a historical text (e.g., a variant from a Shakespeare play or a medieval poem) with actual manuscript images or scans of early editions popping up as witnesses are discussed. Include a 4-minute interactive exercise where learners click on highlighted words in a simulated text to reveal the underlying TEI markup for a variant, then drag and drop ` @wit ` attributes to correctly assign readings to witnesses. Provide a downloadable PDF with examples of complex apparatus entries. Ensure high-contrast visuals and readable fonts for the text.

### Chapter 5.3 — Encoding People, Places, and Organizations (Named Entities)

#### Learning objectives
*   Identify the core TEI elements for encoding named entities: ` <persName> `, ` <placeName> `, and ` <orgName> `.
*   Understand the importance of disambiguation and normalization for named entities in digital humanities.
*   Utilize the ` @ref ` attribute to link named entities to external authority files or internal lists.
*   Explain the role of ` <listPerson> `, ` <listPlace> `, and ` <listOrg> ` in the ` <teiHeader> ` for entity declaration.
*   Avoid common errors in entity encoding, such as inconsistent naming or missing disambiguation.

#### Detailed lesson content
One of the most powerful applications of TEI in digital humanities is the ability to identify and semantically enrich named entities within a text. People, places, and organizations are not just strings of characters; they are key anchors of historical, social, and cultural meaning. By explicitly marking them up, we transform unstructured text into structured data, enabling complex queries, network analysis, geographical mapping, and biographical research that would be impossible with plain text. This process moves us from simply reading a text to actively analyzing its underlying informational architecture.

The core TEI elements for named entities are straightforward: ` <persName> ` for people, ` <placeName> ` for places, and ` <orgName> ` for organizations. These elements wrap the actual name as it appears in the text. For example, in a historical document mentioning "William Shakespeare," we would encode it as ` <persName>William Shakespeare</persName> `. However, simply tagging the name is often insufficient. The real power comes from disambiguation and normalization. "William Shakespeare" could refer to the playwright, or a contemporary merchant, or a distant relative. "London" could refer to the city, or a specific district within it, or even a ship named *London*.

This is where the ` @ref ` attribute becomes indispensable. The ` @ref ` attribute allows us to link a specific instance of a named entity in the text to a unique, authoritative identifier. This identifier typically comes from an external authority file or a project-specific list. For people, common authority files include the Virtual International Authority File (VIAF), the Library of Congress Name Authority File (LCNAF), or specific biographical dictionaries. For places, GeoNames, Getty Thesaurus of Geographic Names (TGN), or historical gazetteers are frequently used. For organizations, similar repositories exist.

Let's illustrate with an example:
```xml
<p>In 1599, <persName ref="http://viaf.org/viaf/100223637">William Shakespeare</persName> completed his play, <title>Julius Caesar</title>, which was likely performed at the <orgName ref="http://www.wikidata.org/entity/Q200782">Globe Theatre</orgName> in <placeName ref="http://www.geonames.org/2643743">London</placeName>.</p>
```
In this snippet, each named entity is not just tagged, but also linked to a stable URI (Uniform Resource Identifier) that points to a record in an external database. This ` @ref ` attribute is critical because it ensures that "William Shakespeare" in this text is unequivocally linked to *the* William Shakespeare, the playwright, and not any other individual. It provides a machine-readable way to say, "This is *that* William Shakespeare."

Beyond linking to external authorities, TEI also allows for the declaration of entities within the ` <teiHeader> ` itself, especially useful for project-specific entities or when no suitable external authority exists. The elements ` <listPerson> `, ` <listPlace> `, and ` <listOrg> ` (within ` <profileDesc> ` or ` <textClass> `) serve this purpose. Each list contains multiple ` <person> `, ` <place> `, or ` <org> ` elements, respectively. Each of these can have an ` @xml:id ` for internal linking, and can include detailed descriptions, alternative names (` <persName type="alt"> `), dates (` <birth> `, ` <death> `), and relationships.

Example of internal declaration:
```xml
<teiHeader>
  <fileDesc>...</fileDesc>
  <profileDesc>
    <particDesc>
      <listPerson>
        <person xml:id="wshakespeare">
          <persName>William Shakespeare</persName>
          <birth when="1564"/>
          <death when="1616"/>
          <note>English playwright and poet.</note>
        </person>
        <person xml:id="queenelizabeth">
          <persName>Elizabeth I</persName>
          <birth when="1533"/>
          <death when="1603"/>
          <note>Queen of England and Ireland.</note>
        </person>
      </listPerson>
      <listPlace>
        <place xml:id="london">
          <placeName>London</placeName>
          <location>
            <geo>51.50722 -0.1275</geo>
          </location>
        </place>
      </listPlace>
    </particDesc>
  </profileDesc>
</teiHeader>
<!-- Then in the text: -->
<p>The Queen, <persName ref="#queenelizabeth">Elizabeth</persName>, visited <placeName ref="#london">London</placeName>.</p>
```
Here, ` @ref="#wshakespeare" ` links to the ` <person> ` element with ` @xml:id="wshakespeare" ` declared in the ` <teiHeader> `. This internal linking is crucial for maintaining consistency and providing a central point for entity metadata within your project.

Common mistakes in entity encoding include:
1.  **Inconsistent Tagging:** Tagging "William Shakespeare" in one instance but "Shakespeare" in another without linking them to the same ` @ref `. This creates ambiguity.
2.  **Lack of Disambiguation:** Not using ` @ref ` when a name could refer to multiple individuals or places. This is a critical error that undermines the analytical potential.
3.  **Over-encoding:** Tagging common nouns or adjectives that aren't proper named entities (e.g., `<persName>king</persName>` when referring to "a king" generally, not a specific monarch).
4.  **Ignoring Context:** Not considering the historical context when choosing an authority file or defining an entity. For example, "New York" in a 17th-century document refers to something very different from "New York City" today.

Scholarly caution dictates that the choice of authority file should be carefully considered based on the project's scope, historical period, and linguistic context. For instance, a project on ancient Greece might prioritize the Pleiades gazetteer for place names over GeoNames. Furthermore, the process of entity recognition and disambiguation can be complex and often requires a combination of automated tools and manual review. The goal is not just to identify names but to connect them to a stable, semantically rich representation, making our digital editions truly interoperable and analytically powerful.

#### Key concepts
*   **Named Entity Recognition (NER):** The process of identifying and classifying named entities (people, organizations, locations, etc.) in text.
*   **` <persName> `:** A TEI element used to mark up the name of a person.
*   **` <placeName> `:** A TEI element used to mark up the name of a place.
*   **` <orgName> `:** A TEI element used to mark up the name of an organization.
*   **` @ref `:** An attribute used on named entity elements to link them to an external authority file (e.g., VIAF, GeoNames) or an internal declaration.
*   **Disambiguation:** The process of distinguishing between different entities that share the same name (e.g., "Paris" the city vs. "Paris" the mythological figure).
*   **Normalization:** The process of standardizing variant forms of a name to a single, preferred form or identifier.
*   **` <listPerson> `, ` <listPlace> `, ` <listOrg> `:** Elements in the ` <teiHeader> ` used to declare and provide metadata for all named entities relevant to the text, allowing for internal linking via ` @xml:id `.

#### Hands-on activity
**Encoding Entities in a Historical Letter**

You are encoding a letter from a 19th-century author, Jane Austen. The letter mentions her publisher, John Murray, and her home in Chawton.

Excerpt:
"My dear Cassandra, I have just received a letter from Mr. Murray regarding the proofs. I hope to visit London next month, but for now, Chawton must suffice."

Your task is to:
1.  Tag `Jane Austen`, `Cassandra`, `Mr. Murray`, `London`, and `Chawton` with the appropriate TEI named entity elements.
2.  For `Jane Austen`, `John Murray`, and `London`, use the ` @ref ` attribute to link to plausible (even if fictional for this exercise) external authority URIs.
    *   Jane Austen: `http://example.com/viaf/janeausten`
    *   John Murray: `http://example.com/viaf/johnmurray`
    *   London: `http://example.com/geonames/london`
3.  For `Cassandra` and `Chawton`, assume there are no external authority files you want to use. Instead, declare them in a ` <listPerson> ` and ` <listPlace> ` in a simplified ` <teiHeader> ` and link to them internally using ` @ref ` and ` @xml:id `.

```xml
<teiHeader>
  <fileDesc>
    <titleStmt><title>Letter from Jane Austen</title></titleStmt>
    <publicationStmt><p>Unpublished digital edition.</p></publicationStmt>
    <sourceDesc><p>Original letter.</p></sourceDesc>
  </fileDesc>
  <profileDesc>
    <particDesc>
      <listPerson>
        <person xml:id="cassandra">
          <persName>Cassandra Austen</persName>
          <note>Sister of Jane Austen.</note>
        </person>
        <!-- Add Jane Austen and John Murray here if you prefer internal for them too, or just keep Cassandra -->
      </listPerson>
      <listPlace>
        <place xml:id="chawton">
          <placeName>Chawton</placeName>
          <note>Village in Hampshire, England, where Jane Austen lived.</note>
        </place>
      </listPlace>
    </particDesc>
  </profileDesc>
</teiHeader>

<body>
  <div type="letter">
    <opener>My dear <persName ref="#cassandra">Cassandra</persName>,</opener>
    <p>I have just received a letter from <persName ref="http://example.com/viaf/johnmurray">Mr. Murray</persName> regarding the proofs. I hope to visit <placeName ref="http://example.com/geonames/london">London</placeName> next month, but for now, <placeName ref="#chawton">Chawton</placeName> must suffice.</p>
  </div>
</body>
```

#### Assessment idea
1.  **Question:** You encounter the phrase "the Bard" in a text about English literature. You know it refers to William Shakespeare. How would you encode this to ensure that "the Bard" is correctly identified as William Shakespeare, linking to an external authority file (e.g., `http://viaf.org/viaf/100223637`)?

    **Model Response:**
    ```xml
    <persName ref="http://viaf.org/viaf/100223637" role="epithet">the Bard</persName>
    ```
    *Rubric:* Full credit for using ` <persName> ` with the correct ` @ref ` attribute. Optional bonus for using ` @role="epithet" ` to further clarify the nature of the name.

2.  **Question:** Explain the primary advantage of using ` @ref ` to link named entities to authority files compared to simply tagging them with ` <persName> `, ` <placeName> `, or ` <orgName> ` without ` @ref `.

    **Model Response:**
    The primary advantage of using ` @ref ` to link named entities to authority files is **disambiguation and normalization**. Simply tagging an entity like `<persName>Washington</persName>` doesn't tell a machine whether it refers to George Washington, Washington State, Washington D.C., or a different person named Washington. By using ` @ref ` to point to a unique identifier in an authority file (e.g., `ref="http://viaf.org/viaf/27073281"` for George Washington), we explicitly disambiguate the entity. This normalization ensures that all mentions of the same entity, even if they appear in different forms ("Washington," "G. Washington," "President Washington"), are linked to a single, stable, machine-readable record. This is crucial for data aggregation, querying across multiple texts, building knowledge graphs, and enabling interoperability with other digital resources. Without ` @ref `, the analytical potential of named entity tagging is severely limited.

#### AI generation note
Design a 10-minute interactive module. Start with a brief animated introduction explaining the concept of named entities and the problem of disambiguation. Then, present a simulated historical document (e.g., a digitized letter or newspaper clipping). The main activity involves learners clicking on highlighted names, places, and organizations within the document. Upon clicking, a pop-up window appears, prompting them to select the correct TEI element (` <persName> `, ` <placeName> `, ` <orgName> `) and then choose the correct ` @ref ` URI from a list of options (some correct, some incorrect/ambiguous). Provide immediate feedback. Include a visual representation of how ` @ref ` links to external knowledge bases. Conclude with a short reflection prompt on the challenges of entity resolution. Ensure accessibility with clear visual cues and keyboard navigation options.

### Chapter 5.4 — Handling Dates, Numbers, and Measures

#### Learning objectives
*   Identify and correctly apply TEI elements for encoding dates, numbers, and measures.
*   Understand the importance of normalization for these numerical and temporal entities.
*   Utilize attributes like ` @when `, ` @value `, ` @unit `, and ` @quantity ` to provide precise, machine-readable data.
*   Differentiate between encoding the textual representation and the normalized value of dates, numbers, and measures.
*   Recognize common ambiguities and pitfalls in encoding temporal and numerical data.

#### Detailed lesson content
Dates, numbers, and measures are fundamental components of nearly all texts, from historical documents to scientific reports. However, their representation in natural language can be incredibly varied, ambiguous, and difficult for machines to process. A text might refer to "the year of our Lord 1600," "sixteen hundred," "the turn of the century," or "four score and seven years." Similarly, quantities might be expressed as "a dozen," "twelve," "XII," or "a great many," and measures as "a league," "three miles," or "a stone's throw." The Text Encoding Initiative (TEI) provides specific elements and attributes to normalize these diverse textual forms into precise, machine-readable data, unlocking their potential for quantitative analysis, timeline generation, and data visualization.

The primary element for dates is ` <date> `. When we encounter a date in a text, we wrap it with ` <date> `. The crucial aspect here is the ` @when ` attribute, which provides a normalized, ISO 8601-compliant representation of the date (YYYY-MM-DD). This allows for unambiguous chronological ordering and computation.

Consider these examples:
*   "On the first of January, 1600..." becomes `<date when="1600-01-01">the first of January, 1600</date>`.
*   "In the year of our Lord 1600..." becomes `<date when="1600">the year of our Lord 1600</date>`.
*   "At the turn of the century..." might be `<date notBefore="1899" notAfter="1901">the turn of the century</date>`, using ` @notBefore ` and ` @notAfter ` for imprecise dates.

For more complex or partial dates, TEI offers ` @from ` and ` @to ` for date ranges, ` @notBefore ` and ` @notAfter ` for approximate dates, and ` @cert ` for expressing certainty. For instance, a letter dated "Monday, the 10th" in 17th-century England might require external research to determine the exact year, and ` @cert="low" ` could be used if there's uncertainty. The goal is always to capture the textual representation while providing a precise, normalized value in the attributes.

Similarly, for numbers, the ` <num> ` element is used. The ` @value ` attribute provides the normalized numerical value, while ` @type ` can specify the kind of number (e.g., cardinal, ordinal, percentage).
*   "There were twelve apostles." becomes `<num value="12" type="cardinal">twelve</num>`.
*   "He was the first to arrive." becomes `<num value="1" type="ordinal">first</num>`.
*   "A score of men" becomes `<num value="20">a score</num>`.

This normalization is vital for any quantitative analysis. Imagine trying to count occurrences of "twelve" versus "a dozen" without normalization; the data would be incomplete.

Measures, which combine a quantity and a unit, are handled by the ` <measure> ` element. This element typically uses ` @quantity ` for the numerical value and ` @unit ` for the unit of measurement.
*   "He walked three miles." becomes `<measure quantity="3" unit="mile">three miles</measure>`.
*   "The fabric measured two yards." becomes `<measure quantity="2" unit="yard">two yards</measure>`.
*   "A pound of sugar" becomes `<measure quantity="1" unit="pound">a pound of sugar</measure>`.

For historical units of measure, which can be highly variable and localized, it's crucial to provide context or link to external definitions if possible. The ` @unit ` attribute can also take a URI to a standardized ontology of units, if available.

A common pitfall in encoding these entities is failing to provide the normalized attribute values. Simply wrapping "sixteen hundred" with ` <date> ` without ` @when="1600" ` defeats the purpose of machine readability. Another mistake is to treat every number as a ` <num> ` element; numbers that are part of other entities (e.g., a street address like "1600 Pennsylvania Avenue") might be better handled as part of the ` <address> ` or ` <placeName> ` structure. Similarly, dates that are part of a ` <bibl> ` (bibliography) entry's publication date might be better encoded within ` <date> ` inside ` <bibl> ` rather than as standalone ` <date> ` elements in the running text, depending on the project's focus.

The theoretical underpinning here connects to the broader principles of data modeling and semantic web. By normalizing temporal and numerical data, we are creating structured, interoperable data that can be used by various tools and applications. This moves beyond simply preserving the text to making its inherent information computable. For historical research, this means being able to build precise timelines, analyze economic data, track demographic changes, or map journeys with greater accuracy. The scholarly caution is to be meticulous and consistent in applying these elements and attributes, as inconsistencies can lead to flawed analyses. Always consult the TEI Guidelines for the full range of attributes and their specific uses, especially for complex cases like lunar calendars or historical currency conversions.

#### Key concepts
*   **` <date> `:** A TEI element used to mark up temporal expressions, typically with an ` @when ` attribute for ISO 8601 normalization.
*   **` @when `:** An attribute on ` <date> ` that provides a normalized date in YYYY-MM-DD format, or YYYY for years, YYYY-MM for months, etc.
*   **` @notBefore ` / ` @notAfter `:** Attributes used on ` <date> ` to specify a range for imprecise dates.
*   **` <num> `:** A TEI element used to mark up numerical expressions, typically with a ` @value ` attribute for normalization.
*   **` @value `:** An attribute on ` <num> ` that provides the normalized numerical value.
*   **` <measure> `:** A TEI element used to mark up expressions of quantity and unit, typically with ` @quantity ` and ` @unit ` attributes.
*   **` @quantity `:** An attribute on ` <measure> ` that provides the numerical value of the measure.
*   **` @unit `:** An attribute on ` <measure> ` that specifies the unit of measurement.
*   **ISO 8601:** An international standard for the representation of dates and times, used for normalization in TEI.
*   **Normalization:** The process of converting varied textual representations of dates, numbers, or measures into a consistent, standardized, and machine-readable format.

#### Hands-on activity
**Encoding Dates, Numbers, and Measures in a Historical Document**

You are encoding a passage from a historical account:

"In the year 1776, a momentous declaration was signed by fifty-six delegates. The journey to Philadelphia, a distance of some 100 miles for many, often took three days. The cost of paper alone was estimated at ten shillings per ream."

Your task is to:
1.  Tag "1776" with ` <date> ` and the appropriate ` @when ` attribute.
2.  Tag "fifty-six" with ` <num> ` and the appropriate ` @value ` attribute.
3.  Tag "100 miles" with ` <measure> ` and the appropriate ` @quantity ` and ` @unit ` attributes.
4.  Tag "three days" with ` <measure> ` and the appropriate ` @quantity ` and ` @unit ` attributes.
5.  Tag "ten shillings" with ` <measure> ` and the appropriate ` @quantity ` and ` @unit ` attributes. (Assume "shilling" is the unit).

```xml
<p>In the <date when="1776">year 1776</date>, a momentous declaration was signed by <num value="56">fifty-six</num> delegates. The journey to Philadelphia, a distance of some <measure quantity="100" unit="mile">100 miles</measure> for many, often took <measure quantity="3" unit="day">three days</measure>. The cost of paper alone was estimated at <measure quantity="10" unit="shilling">ten shillings</measure> per ream.</p>
```

#### Assessment idea
1.  **Question:** You find the phrase "the 15th of August, 1815" in a letter. How would you encode this using the ` <date> ` element, including the necessary attribute for machine-readability?

    **Model Response:**
    ```xml
    <date when="1815-08-15">the 15th of August, 1815</date>
    ```
    *Rubric:* Full credit for correctly using ` <date> ` and the ` @when ` attribute with the ISO 8601 format.

2.  **Question:** A text mentions "a score of sheep" and "two dozen eggs." Explain how you would encode these two phrases using TEI, highlighting the role of the ` @value ` attribute. Why is ` @value ` important here?

    **Model Response:**
    *   "a score of sheep": `<num value="20">a score</num> of sheep`
    *   "two dozen eggs": `<num value="24">two dozen</num> eggs`

    The ` @value ` attribute is important because it provides a normalized, numerical representation of the quantity, regardless of how it is expressed in natural language. "A score" and "two dozen" are textual idioms for specific numerical quantities. Without ` @value `, a machine would not be able to easily identify or sum these quantities. For example, if a researcher wanted to count the total number of animals or items mentioned, they could query the ` @value ` attribute directly, rather than having to parse and interpret various natural language expressions, thus enabling quantitative analysis.

#### AI generation note
Develop an 8-minute interactive tutorial. Start with an animation illustrating the ambiguity of natural language dates (e.g., "the 5th," "next Tuesday") versus the precision of ISO 8601. Then, present a series of short text snippets on screen. For each snippet, highlight a date, number, or measure. Learners click on the highlighted text, and a prompt appears asking them to enter the correct TEI element (` <date> `, ` <num> `, ` <measure> `) and the corresponding ` @when `, ` @value `, ` @quantity `, or ` @unit ` attribute values. Provide immediate feedback and explanations for correct/incorrect answers. Include a visual example of how normalized data can populate a timeline or a chart. Ensure all instructions are clear and the interface is intuitive.

### Chapter 5.5 — Encoding Linguistic Annotation and Speech

#### Learning objectives
*   Identify TEI elements for basic linguistic annotation, such as words, sentences, and phrases.
*   Understand how to encode speech in dramatic texts and direct quotations in prose.
*   Utilize elements like ` <w> `, ` <c> `, ` <phr> `, ` <seg> ` for fine-grained linguistic analysis.
*   Apply ` <speaker> `, ` <speech> `, and ` <q> ` to represent dialogue and quoted material.
*   Recognize the challenges and best practices for integrating linguistic analysis with textual markup.

#### Detailed lesson content
Beyond structural and semantic markup, TEI offers powerful capabilities for linguistic annotation, allowing scholars to delve into the very fabric of language itself. This is particularly valuable for projects in corpus linguistics, stylistics, dialectology, and historical linguistics. By marking up words, characters, phrases, and other linguistic units, we can conduct quantitative analyses, identify grammatical patterns, track lexical changes over time, and explore the nuances of authorial voice. Furthermore, for dramatic texts or any work containing direct discourse, TEI provides robust mechanisms for clearly distinguishing speakers and their utterances.

At the most granular level, TEI offers ` <w> ` for words and ` <c> ` for characters. While typically not used for entire texts (as it would be excessively verbose), these elements are invaluable for specific linguistic analyses, such as marking up parts of speech, lemma, or morphological features. For instance, `<w lemma="run" pos="VERB">running</w>` allows for detailed morphological analysis. ` <c> ` might be used for phonetic or graphemic analysis, e.g., `<c ana="#grapheme_thorn">þ</c>`. More commonly, ` <phr> ` (phrase) and ` <seg> ` (segment) are used to mark up arbitrary linguistic units, such as noun phrases, verb phrases, or any sequence of words that forms a coherent unit for analysis. The ` @type ` attribute on ` <seg> ` is particularly versatile, allowing for project-specific categorization, e.g., `<seg type="noun_phrase">the quick brown fox</seg>`.

Consider a sentence: "The quick brown fox jumps over the lazy dog."
We could annotate it for phrases:
```xml
<s xml:id="s1">
  <seg type="noun_phrase">The quick brown fox</seg>
  <seg type="verb_phrase">jumps</seg>
  <seg type="prepositional_phrase">over the lazy dog</seg>.
</s>
```
The ` <s> ` element is commonly used to mark sentences, providing a logical unit for linguistic analysis. The ` @xml:id ` on ` <s> ` allows for easy referencing of individual sentences.

When it comes to representing speech, especially in dramatic works, TEI provides a clear and intuitive structure. The ` <sp> ` (speech) element acts as a container for a single speech by a character. Within ` <sp> `, the ` <speaker> ` element identifies who is speaking, and the actual words spoken are contained in ` <p> ` (paragraph) or ` <l> ` (line) elements.

Example from a play:
```xml
<div type="act">
  <head>Act I, Scene 1</head>
  <sp>
    <speaker>KING LEAR</speaker>
    <p>Give me the map there. Know that we have divided</p>
    <l>In three our kingdom: and 'tis our fast intent</l>
    <l>To shake all cares and business from our age;</l>
  </sp>
  <sp>
    <speaker>KENT</speaker>
    <p>Good my Liege—</p>
  </sp>
</div>
```
The ` <speaker> ` element can also include attributes like ` @who ` to link to a ` <person> ` entry in ` <listPerson> ` in the ` <teiHeader> `, providing disambiguation and rich metadata for characters. For example, `<speaker who="#lear">KING LEAR</speaker>`. This is crucial for character analysis and network visualization.

For direct quotations embedded within a prose text, the ` <q> ` (quote) element is used. It can include attributes like ` @who ` to identify the speaker of the quotation, and ` @source ` to point to the original text from which the quote is taken.
Example:
```xml
<p>As Hamlet famously declared, <q who="#hamlet" source="#hamlet_play">To be, or not to be, that is the question</q>.</p>
```
Here, ` @who="#hamlet" ` would link to a ` <person> ` entry for Hamlet, and ` @source="#hamlet_play" ` would link to a ` <bibl> ` entry for the play *Hamlet*. This allows for precise attribution and contextualization of quoted material.

A common mistake in encoding speech is to simply put the speaker's name in bold or italics without using the ` <speaker> ` element, or to use ` <p> ` for the speaker's name. This loses the semantic distinction that ` <speaker> ` provides, making it impossible for machines to reliably identify who is speaking. Another pitfall in linguistic annotation is inconsistent application of tags or a lack of clear guidelines for what constitutes a "phrase" or "segment." Project-specific tagsets and ODD customizations are often necessary to ensure consistency and analytical rigor. Furthermore, over-encoding every single word or character can make the XML unwieldy and difficult to manage, so a pragmatic approach guided by research questions is always recommended.

The theoretical framework for linguistic annotation often draws from corpus linguistics, which emphasizes the empirical study of language through large collections of texts. By marking up linguistic features, we create a corpus that can be queried statistically to reveal patterns of usage, grammatical structures, and stylistic choices. This provides a powerful empirical basis for linguistic theories. The scholarly caution is to ensure that the chosen annotation scheme is well-defined, consistently applied, and documented, as the quality of linguistic analysis directly depends on the quality of the underlying markup.

#### Key concepts
*   **` <w> ` (word):** A TEI element for marking up individual words, often used for detailed linguistic annotation (e.g., part of speech, lemma).
*   **` <c> ` (character):** A TEI element for marking up individual characters, useful for graphemic or phonetic analysis.
*   **` <phr> ` (phrase):** A TEI element for marking up a grammatical phrase or any arbitrary sequence of words.
*   **` <seg> ` (segment):** A general-purpose TEI element for marking up any arbitrary segment of text, often used with ` @type ` for linguistic categories.
*   **` <s> ` (sentence):** A TEI element used to mark up a sentence, providing a logical unit for linguistic analysis.
*   **` <sp> ` (speech):** A TEI element that acts as a container for a single speech by a character in a dramatic text or dialogue.
*   **` <speaker> `:** A TEI element within ` <sp> ` that identifies the speaker of a given speech.
*   **` <q> ` (quote):** A TEI element used to mark up direct quotations within a prose text, often with ` @who ` and ` @source ` attributes.
*   **Linguistic Annotation:** The process of adding markup to text to identify and categorize linguistic features (e.g., parts of speech, syntactic structures, semantic roles).

#### Hands-on activity
**Encoding Speech and Linguistic Segments**

You have a short dialogue from a play and a prose sentence with a quotation.

Dialogue:
"JULIET: O Romeo, Romeo! wherefore art thou Romeo?
ROMEO: Shall I hear more, or shall I speak at this?"

Prose:
"Dr. Johnson famously remarked, 'No man but a blockhead ever wrote except for money.'"

Your task is to:
1.  Encode the dialogue using ` <sp> `, ` <speaker> `, and ` <l> ` (for lines of verse).
2.  Encode the prose sentence, specifically the quotation, using ` <q> `. Assume ` @who="#johnson" ` and ` @source="#johnson_bio" ` for the quote.
3.  Additionally, within Juliet's first line, mark "O Romeo, Romeo!" as a ` <seg type="vocative"> `.

```xml
<div type="scene">
  <sp>
    <speaker>JULIET</speaker>
    <l><seg type="vocative">O Romeo, Romeo!</seg> wherefore art thou Romeo?</l>
  </sp>
  <sp>
    <speaker>ROMEO</speaker>
    <l>Shall I hear more, or shall I speak at this?</l>
  </sp>
</div>

<p>Dr. Johnson famously remarked, <q who="#johnson" source="#johnson_bio">No man but a blockhead ever wrote except for money.</q></p>
```

#### Assessment idea
1.  **Question:** You are encoding a novel and encounter the following sentence: "She whispered, 'I must go now,' and quickly left the room." How would you encode the quoted speech using TEI, assuming the speaker is "Character A" (xml:id ` #charA `) and the novel itself is ` #novel1 `?

    **Model Response:**
    ```xml
    <p>She whispered, <q who="#charA" source="#novel1">I must go now,</q> and quickly left the room.</p>
    ```
    *Rubric:* Full credit for using ` <q> ` with correct ` @who ` and ` @source ` attributes.

2.  **Question:** Explain why using ` <speaker> ` within ` <sp> ` for dramatic texts is superior to simply bolding or italicizing the character's name in a digital edition. What analytical benefits does ` <speaker> ` provide?

    **Model Response:**
    Using ` <speaker> ` within ` <sp> ` provides **semantic clarity and machine-readability**, which simple formatting (bolding/italicizing) lacks.
    *   **Semantic Clarity:** ` <speaker> ` explicitly identifies the *role* of the text as a speaker's name, distinguishing it from other text. ` <sp> ` clearly delimits the extent of a single character's utterance.
    *   **Machine-Readability:** With ` <speaker> ` and ` <sp> `, software can automatically identify all speeches by a particular character, count their lines, analyze their vocabulary, or even visualize their interactions in a network graph. This is impossible with mere visual formatting.
    *   **Analytical Benefits:** ` <speaker> ` can use ` @who ` to link to a ` <person> ` entry in the ` <teiHeader> `, providing rich metadata about the character (e.g., gender, role, relationships). This enables sophisticated queries like "find all speeches by female characters" or "analyze the vocabulary of the protagonist." Bolding offers no such analytical power. It transforms the text into structured data, crucial for digital humanities research.

#### AI generation note
Create a 10-minute animated tutorial focusing on linguistic annotation and speech. Start with a visual comparison of raw text vs. TEI-encoded text for linguistic analysis. Use a split-screen: left side shows a short poem or prose passage, right side shows the TEI XML. Animate the highlighting of words, phrases, and sentences as ` <w> `, ` <phr> `, ` <seg> `, and ` <s> ` tags appear, with voiceover explaining their purpose and potential attributes (e.g., ` @lemma `, ` @pos `, ` @type `). Then, transition to a dramatic excerpt. Show how ` <sp> `, ` <speaker> `, and ` <l> ` are used, with character icons appearing next to their lines. Include a 3-minute interactive drag-and-drop exercise where learners match linguistic units (e.g., "noun phrase," "speaker," "quote") to their correct TEI tags in a sample text. Provide a downloadable cheat sheet for common linguistic annotation tags.

### Chapter 5.6 — Advanced Annotation: Interpretation, Analysis, and Linkage

#### Learning objectives
*   Explain the role of interpretive and analytical markup in enriching scholarly editions.
*   Apply ` <interp> ` and ` <interpGrp> ` to encode scholarly interpretations and analytical categories.
*   Understand the various TEI linking mechanisms: ` <link> `, ` <ptr> `, ` <ref> `.
*   Differentiate between internal and external linking strategies and their applications.
*   Design and implement a system for cross-referencing and interpretive annotation within a TEI project.

#### Detailed lesson content
As we move into advanced TEI, we transcend mere descriptive markup to embrace the interpretive and analytical dimensions of scholarly work. A digital edition is not just a faithful reproduction of a text; it is an opportunity to embed scholarly insights directly into the text's structure, making interpretations explicit, searchable, and machine-actionable. This chapter focuses on how TEI enables us to encode our own analysis and to create intricate networks of relationships within and beyond the text using powerful linking mechanisms.

The ` <interp> ` (interpretation) element is a cornerstone of analytical markup. It allows an encoder or editor to associate a specific segment of text with a scholarly interpretation, theme, or analytical category. This is incredibly valuable for projects that aim to analyze literary themes, rhetorical devices, historical concepts, or any other interpretive layer. ` <interp> ` elements are typically declared in the ` <teiHeader> ` within an ` <interpGrp> ` (interpretation group), where each ` <interp> ` is given a unique ` @xml:id `. Then, in the body of the text, any segment (e.g., a ` <p> `, ` <l> `, ` <seg> `) can point to one or more of these ` <interp> ` definitions using the ` @ana ` (analysis) attribute.

Consider a text where you want to mark instances of "heroic imagery" and "tragic foreshadowing."
First, in the ` <teiHeader> `:
```xml
<teiHeader>
  <fileDesc>...</fileDesc>
  <profileDesc>
    <textClass>
      <catRef target="#literary_analysis"/>
      <interpGrp type="themes">
        <interp xml:id="heroic_imagery">Instances of heroic imagery.</interp>
        <interp xml:id="tragic_foreshadowing">Elements foreshadowing a tragic outcome.</interp>
      </interpGrp>
    </textClass>
  </profileDesc>
</teiHeader>
```
Then, in the text:
```xml
<p ana="#heroic_imagery">He stood tall, a colossus against the storm, his shield gleaming like a distant star.</p>
<l ana="#tragic_foreshadowing">Yet, a dark cloud gathered on the horizon, promising a bitter end.</l>
```
This explicit linking allows researchers to query all passages associated with "heroic imagery" or "tragic foreshadowing," enabling systematic analysis of these themes across an entire corpus. The ` @type ` attribute on ` <interpGrp> ` can be used to categorize groups of interpretations (e.g., "rhetorical devices," "historical concepts").

Beyond interpretation, TEI provides a rich array of linking elements that create explicit relationships between different parts of a text, or between a text and external resources. The most fundamental are ` <ptr> ` (pointer) and ` <ref> ` (reference).
*   **` <ptr> `:** A simple pointer to a location elsewhere, typically used for cross-references where the text of the reference is generated by the display system. Example: `<ptr target="#chapter2_summary"/>`.
*   **` <ref> `:** A reference to a location elsewhere, where the text of the reference is explicitly provided in the XML. Example: `See <ref target="#chapter2_summary">the summary of Chapter 2</ref> for details.`

Both ` <ptr> ` and ` <ref> ` use the ` @target ` attribute to point to an ` @xml:id ` within the same document or to an external URI. This is crucial for creating hyperlinked editions, allowing users to navigate seamlessly between related passages, footnotes, or external resources.

For more complex, explicit relationships, the ` <link> ` element is used. ` <link> ` allows us to define a relationship between two or more distinct points in a text, or between a text and an external resource, without necessarily embedding the link at the point of reference. It is typically placed in the ` <teiHeader> ` within a ` <linkGrp> ` (link group). ` <link> ` uses ` @target ` to specify the ` @xml:id `s of the elements being linked, separated by spaces. The ` @ana ` attribute can be used to specify the nature of the relationship, pointing to an ` <interp> ` element that defines the relationship type.

Example:
```xml
<teiHeader>
  <fileDesc>...</fileDesc>
  <profileDesc>
    <textClass>
      <interpGrp type="relations">
        <interp xml:id="allusion">Allusion to another text.</interp>
        <interp xml:id="contradiction">Contradiction between two statements.</interp>
      </interpGrp>
    </textClass>
  </profileDesc>
  <encodingDesc>
    <linkGrp type="textual_relations">
      <link target="#passageA #passageB" ana="#allusion"/>
      <link target="#statement1 #statement2" ana="#contradiction"/>
    </linkGrp>
  </encodingDesc>
</teiHeader>
<!-- In the text -->
<p xml:id="passageA">This passage echoes ancient myths.</p>
<p xml:id="passageB">The hero's journey mirrors that of Odysseus.</p>
<p xml:id="statement1">The king was a benevolent ruler.</p>
<p xml:id="statement2">His subjects suffered under his harsh decrees.</p>
```
Here, ` <link> ` explicitly declares that ` passageA ` alludes to ` passageB `, and ` statement1 ` contradicts ` statement2 `. This allows for the creation of sophisticated semantic networks that go far beyond simple hyperlinks.

A common pitfall is to confuse ` <ref> ` and ` <ptr> ` with ` <link> `. ` <ref> ` and ` <ptr> ` are *inline* pointers, meaning they are placed directly within the text at the point where the reference is made. ` <link> `, conversely, is *out-of-line*, meaning it is typically declared in the ` <teiHeader> ` and defines a relationship between two or more points without being embedded at those points. This distinction is crucial for maintaining the integrity of the primary text while still enabling complex relational markup. Another mistake is to use ` @ana ` for ad-hoc descriptions rather than linking to predefined ` <interp> ` elements, which undermines the consistency and queryability of the analytical categories.

The theoretical framework for advanced annotation draws heavily from theories of knowledge representation, semantic web technologies, and digital hermeneutics. By encoding interpretations and explicit links, we are building a machine-readable model of scholarly understanding, allowing for new forms of computational analysis and argumentation. Scholarly caution suggests that interpretive markup should be transparent, well-documented, and, where possible, linked to established ontologies or controlled vocabularies to ensure clarity and interoperability. The goal is to make the scholarly process itself more explicit and verifiable within the digital environment.

#### Key concepts
*   **` <interp> ` (interpretation):** A TEI element used to define a scholarly interpretation, theme, or analytical category, typically declared in the ` <teiHeader> `.
*   **` <interpGrp> ` (interpretation group):** A container for a group of ` <interp> ` elements, often categorized by ` @type `.
*   **` @ana ` (analysis):** An attribute used on any TEI element in the text to point to one or more ` @xml:id `s of ` <interp> ` elements in the ` <teiHeader> `, associating the text segment with a specific interpretation.
*   **` <ptr> ` (pointer):** An inline TEI element that creates a simple pointer to another location, where the reference text is not explicitly provided.
*   **` <ref> ` (reference):** An inline TEI element that creates a reference to another location, where the reference text is explicitly provided within the element.
*   **` <link> `:** An out-of-line TEI element (typically in ` <teiHeader> `) used to define a relationship between two or more distinct points in a text or between a text and an external resource.
*   **` <linkGrp> ` (link group):** A container for a group of ` <link> ` elements.
*   **` @target `:** An attribute used on ` <ptr> `, ` <ref> `, and ` <link> ` to specify the ` @xml:id ` of the element(s) being linked to, or an external URI.
*   **Out-of-line vs. Inline Markup:** A distinction where inline markup is embedded directly within the text (e.g., ` <ref> `), while out-of-line markup defines relationships externally, often in the ` <teiHeader> ` (e.g., ` <link> `).

#### Hands-on activity
**Implementing Interpretive and Linking Markup**

You are working on a text and want to:
1.  Mark a passage as exhibiting "irony."
2.  Create an internal reference from one sentence to another.
3.  Define an out-of-line link between two passages that represent a "cause-effect" relationship.

Here's the text:
"<p xml:id="para1">The politician declared his unwavering commitment to fiscal responsibility. <seg xml:id="irony_instance">Meanwhile, his personal expenses soared.</seg></p>
<p xml:id="para2">This led to public outcry. The media, in turn, amplified the discontent.</p>"

Your task:
*   In the ` <teiHeader> `, define an ` <interpGrp> ` with an ` <interp xml:id="irony"> ` for "irony" and an ` <interp xml:id="cause_effect"> ` for "cause-effect relationship."
*   Apply the ` @ana="#irony" ` attribute to the ` <seg> ` element in ` para1 `.
*   Add a ` <ref> ` element in ` para2 ` that links to ` para1 `, saying "See previous paragraph."
*   In the ` <teiHeader> `, create a ` <linkGrp> ` with a ` <link> ` element that uses ` @target ` to link ` #para1 ` and ` #para2 ` with the ` @ana="#cause_effect" ` attribute.

```xml
<teiHeader>
  <fileDesc>...</fileDesc>
  <profileDesc>
    <textClass>
      <interpGrp type="analytical_categories">
        <interp xml:id="irony">A literary device where the intended meaning is different from the actual meaning.</interp>
        <interp xml:id="cause_effect">A relationship where one event or action directly leads to another.</interp>
      </interpGrp>
    </textClass>
  </profileDesc>
  <encodingDesc>
    <linkGrp type="intertextual_relations">
      <!-- Add your link element here -->
    </linkGrp>
  </encodingDesc>
</teiHeader>

<body>
  <p xml:id="para1">The politician declared his unwavering commitment to fiscal responsibility. <seg xml:id="irony_instance" ana="#irony">Meanwhile, his personal expenses soared.</seg></p>
  <p xml:id="para2">This led to public outcry. <ref target="#para1">See previous paragraph</ref>. The media, in turn, amplified the discontent.</p>
</body>
```

#### Assessment idea
1.  **Question:** You want to mark a specific sentence in your text as expressing a "sarcastic tone."
    a) What TEI element would you define in the ` <teiHeader> ` to establish "sarcastic tone" as an analytical category?
    b) What attribute would you use on the sentence element in the text to link it to this category?
    c) Provide the XML for both the definition in the ` <teiHeader> ` and the application in the text (assume the sentence is `<s xml:id="sarcastic_sent">This is a truly brilliant idea.</s>`).

    **Model Response:**
    a) You would define an ` <interp> ` element within an ` <interpGrp> ` in the ` <teiHeader> `.
    b) You would use the ` @ana ` attribute on the sentence element.
    c)
    ```xml
    <!-- In teiHeader -->
    <profileDesc>
      <textClass>
        <interpGrp type="tone">
          <interp xml:id="sarcastic_tone">Expresses sarcasm or ironic humor.</interp>
        </interpGrp>
      </textClass>
    </profileDesc>

    <!-- In text body -->
    <s xml:id="sarcastic_sent" ana="#sarcastic_tone">This is a truly brilliant idea.</s>
    ```
    *Rubric:* Full credit for correct use of ` <interp> `, ` <interpGrp> `, ` @xml:id `, ` @ana `, and correct linking.

2.  **Question:** Explain the functional difference between ` <ref> ` and ` <link> ` in TEI. When would you choose one over the other for a scholarly edition?

    **Model Response:**
    The functional difference lies in their placement and purpose:
    *   **` <ref> ` (Reference):** This is an **inline** element, meaning it is embedded directly within the text at the point where the reference is made. It explicitly contains the text of the reference itself (e.g., "See <ref target="#footnote1">note 1</ref>"). Its primary purpose is to create direct, visible hyperlinks within the flow of the text, allowing a reader to navigate from a point in the text to another location (internal or external).
    *   **` <link> ` (Link):** This is an **out-of-line** element, typically placed in the ` <teiHeader> ` within a ` <linkGrp> `. It defines a relationship between two or more elements *without* being embedded in the text itself. It uses ` @target ` to specify the ` @xml:id `s of the elements being linked and ` @ana ` to describe the nature of the relationship (e.g., ` <link target="#paraA #paraB" ana="#contradiction"/> `). Its purpose is to explicitly model complex, semantic relationships between textual segments that might not be immediately apparent or that an editor wants to highlight for analytical purposes, without disrupting the primary text.

    **When to choose:**
    *   Choose ` <ref> ` when you want to create a standard, visible hyperlink for navigation (e.g., cross-references to footnotes, other chapters, or external websites) that is part of the reading experience.
    *   Choose ` <link> ` when you want to formally declare and analyze abstract relationships between textual units (e.g., an allusion, a thematic connection, a logical contradiction, a cause-effect relationship) that might be computationally analyzed or visualized, often without a direct, embedded textual reference. ` <link> ` is for modeling relationships, while ` <ref> ` is for creating navigational pointers.

#### AI generation note
Produce a 14-minute video lecture with interactive elements. Begin with an explanation of how interpretive markup adds a layer of scholarly insight to raw text. Use a split-screen: left side shows a short literary passage, right side shows its TEI XML. Animate the application of ` @ana ` to various ` <seg> ` elements, with pop-ups explaining the ` <interp> ` definitions from the ` <teiHeader> `. Then, transition to an explanation of ` <ptr> `, ` <ref> `, and ` <link> `. Show practical examples of each, demonstrating how ` <ref> ` creates a clickable link, ` <ptr> ` is for implicit references, and ` <link> ` defines relationships in the ` <teiHeader> `. Include a 5-minute interactive exercise where learners are given a short text and a set of ` <interp> ` definitions, and they must drag-and-drop the correct ` @ana ` attributes onto highlighted text segments. Also, have them identify which type of linking element (` <ptr> `, ` <ref> `, ` <link> `) would be best for different scenarios (e.g., "link to a footnote," "declare a thematic parallel"). Provide a downloadable summary of linking elements and their use cases.

---

## Module 6: Customizing TEI: ODD and Project-Specific Schemas

This module will guide you through the advanced process of customizing the Text Encoding Initiative (TEI) Guidelines to meet the unique demands of your digital humanities projects. While the TEI provides a robust and comprehensive framework for encoding texts, no single standard can perfectly anticipate every scholarly nuance or project-specific requirement. This module introduces the One Document Does it all (ODD) language, a powerful TEI-native mechanism that allows you to define, extend, and constrain the TEI schema, ensuring your encoding precisely reflects your editorial decisions and research questions. By mastering ODD, you will gain the autonomy to tailor TEI to your specific needs, generate project-specific schemas, and contribute to the broader ecosystem of scholarly editing with precision and clarity.

### Chapter 6.1 — Introduction to Customization: Why ODDs?

#### Learning objectives
*   Explain the fundamental reasons for customizing the TEI Guidelines in digital scholarly editing.
*   Identify the limitations of using the generic TEI P5 schema for specialized projects.
*   Define the purpose and core function of an ODD (One Document Does it all) file.
*   Contextualize ODD within the historical development of XML schema languages and TEI.

#### Detailed lesson content
Welcome to the frontier of advanced TEI encoding, where we move beyond merely applying the existing guidelines to actively shaping them. Up to this point, we have primarily focused on understanding and utilizing the rich vocabulary provided by the TEI P5 Guidelines. We've learned to mark up headers, paragraphs, names, dates, and even complex textual phenomena like critical apparatus and linguistic annotations. However, as you embark on increasingly specialized digital humanities projects, you will inevitably encounter situations where the generic TEI P5 schema, comprehensive as it is, doesn't quite fit your precise needs. This is where customization becomes not just an option, but a necessity, and the TEI's own customization language, ODD (One Document Does it all), emerges as an indispensable tool.

Consider a project focused on the diplomatic transcription of medieval charters. While TEI offers elements like `<persName>` for persons and `<placeName>` for places, your project might require a more granular distinction, perhaps between a grantor, a grantee, and a witness, or between a specific manor and a broader geographical region mentioned in the charter. The generic TEI P5 doesn't inherently enforce these distinctions at the element level, nor does it prevent you from using attributes in ways that might be inconsistent across your project team. Or perhaps you are working on a corpus of early modern drama and need to introduce a new element, say `<stageDirectionType>`, to categorize different kinds of stage directions (e.g., "entrance," "exit," "action," "sound") in a structured way that isn't directly supported by existing TEI elements or attributes. In such cases, relying solely on the standard TEI P5 can lead to either an overly generic encoding that fails to capture your research questions, or a proliferation of ad-hoc attribute values that are difficult to validate and maintain.

The historical trajectory of TEI itself underscores the importance of customization. From its inception, the TEI consortium recognized that scholarly projects would always have unique requirements. Early versions of TEI relied on DTDs (Document Type Definitions), which allowed for some level of customization, but were often cumbersome to manage and less expressive than later schema languages. With the advent of XML Schema and RELAX NG, more robust and flexible ways to define document structures became available. The TEI P5 Guidelines, therefore, were designed not as a rigid, monolithic standard, but as a *framework* – a vast toolkit from which projects could select, extend, and constrain elements and attributes to create their own specialized schemas. ODD is the TEI's elegant solution to this challenge. It is an XML language *for describing other XML languages*, specifically TEI customizations. Instead of directly writing complex DTDs, XML Schemas, or RELAX NG schemas from scratch, you write an ODD document, which is itself a TEI document, to declare your desired modifications. This ODD then serves as the single source of truth from which various schema languages can be automatically generated. This "one document" approach streamlines the process, ensures consistency across different schema formats, and makes your project's encoding rules transparent and machine-readable. It allows you to specify precisely which TEI elements and attributes are permitted, which are forbidden, what their content models should be, and what values their attributes can take, all within a human-readable and well-documented format.

Without ODD, every project requiring specific constraints or extensions would have to manually craft and maintain its own schema files (DTD, XSD, RNG), a task fraught with potential for error and inconsistency. Imagine a large collaborative project with multiple encoders. Without a shared, project-specific schema generated from an ODD, each encoder might interpret the guidelines slightly differently, leading to validation errors, inconsistent markup, and ultimately, data that is difficult to query and analyze uniformly. ODD provides the necessary infrastructure to enforce project-specific encoding rules, making your digital scholarly editions more robust, interoperable, and sustainable. It embodies the principle that while standards are crucial, flexibility within those standards is equally vital for the nuanced work of digital humanities.

#### Key concepts
*   **ODD (One Document Does it all):** A TEI-native XML language used to define, customize, and document a TEI schema for a specific project. It serves as a single source from which various schema types (RELAX NG, DTD, XML Schema) can be generated.
*   **Customization:** The process of tailoring the generic TEI P5 Guidelines to meet the unique requirements of a specific scholarly editing project, typically by adding, removing, or modifying elements and attributes.
*   **Schema:** A formal definition of the structure and content of an XML document. It specifies which elements and attributes are allowed, their relationships, and their data types.
*   **Generic TEI P5 Schema:** The comprehensive, default schema provided by the TEI Consortium, which includes all recommended elements and attributes.
*   **Project-Specific Schema:** A customized schema derived from the generic TEI P5, tailored to the specific needs and constraints of a particular digital humanities project.

#### Hands-on activity
**Reflecting on Customization Needs**
Consider a hypothetical digital edition project focused on a corpus of 19th-century scientific correspondence. You want to encode not just the names of scientists, but specifically identify the *sender* and *recipient* of each letter, and also distinguish between scientific terms that are *established* vs. *newly coined* within the period.

1.  Brainstorm how you might currently encode these distinctions using only the generic TEI P5 elements and attributes (e.g., using `@role` on `<persName>`, or `<term>` with a `@type` attribute).
2.  Now, reflect on the limitations or ambiguities of your proposed generic TEI P5 solution. What inconsistencies might arise? What would be difficult to validate?
3.  Write a short paragraph (100-150 words) explaining *why* a custom element like `<sender>` and `<recipient>` (instead of just `<persName>`) or a custom attribute on `<term>` with a restricted set of values (`@status="established"` or `@status="newlyCoined"`) would be beneficial for this project, specifically in terms of data consistency, validation, and queryability.

#### Assessment idea
1.  **Question:** A digital edition project aims to specifically identify and distinguish between different types of marginalia (e.g., "reader's note," "author's **Model Response:** While using `<note type="reader's note">` is a valid approach with generic TEI, it relies on free-text `@type` values, which can lead to inconsistencies (e.g., "reader's note" vs. "reader note" vs. "reader-note"). An ODD allows the project to define a new element like `<marginalia>` or `<readerNote>` (if the project wants to elevate specific types to elements) or, more commonly, to constrain the `@type` attribute on `<note>` to a specific, enumerated list of allowed values (e.g., `type="reader-note" | type="author-*Question:** Which of the following best describes the primary purpose of an ODD file in the context of TEI customization?
    a) To convert TEI XML documents into HTML for web display.
    b) To provide a graphical user interface for editing TEI files.
    c) To define and document a project-specific subset or extension of the TEI Guidelines, from which various schema languages can be generated.
    d) To perform automated linguistic analysis on TEI-encoded texts.
    *   **Correct Answer:** c) To define and document a project-specific subset or extension of the TEI Guidelines, from which various schema languages can be generated.

#### AI generation note
Create a 10-minute video lecture with a scholarly yet accessible tone. Use a split-screen format: one side shows an example of generic TEI P5 markup for a `<persName>` and `<term>`, and the other side shows a hypothetical project requirement that highlights the limitations of the generic approach. Use animated overlays to illustrate the ambiguity of free-text attributes versus the precision of constrained values. Include a short historical timeline of TEI schema development (DTD -> XML Schema/RELAX NG -> ODD) to contextualize ODD's role. End with a reflection prompt asking learners to consider a specific customization need from their own research interests. Ensure captions and a downloadable PDF of the example XML are provided.

### Chapter 6.2 — Understanding ODD Structure: `schemaSpec` and `elementSpec`

#### Learning objectives
*   Identify the root element of an ODD document and its primary function.
*   Explain the role of the `<elementSpec>` element in defining or modifying TEI elements.
*   Demonstrate how to reference existing TEI elements for modification within an ODD.
*   Construct a basic ODD document to introduce a new element or modify an existing one's description.

#### Detailed lesson content
Having understood *why* we customize TEI, let's now delve into *how* we do it using ODD. At its core, an ODD document is itself a TEI XML file, making it familiar territory for anyone comfortable with TEI encoding. The central organizing element of any ODD is `<schemaSpec>`. This element acts as the container for all your customizations, defining the scope and nature of the schema you intend to generate. Think of `<schemaSpec>` as the blueprint for your project's specific TEI dialect. It typically lives within the `<text>` element of a TEI document, often nested within a `<body`> or `<standOff>` section, though for simplicity, many ODDs are standalone TEI documents where `<schemaSpec>` is the primary content.

Within `<schemaSpec>`, the most fundamental building block for customization is `<elementSpec>`. This element is where you define or modify the properties of a specific TEI element. When you want to introduce a completely new element that isn't part of the standard TEI P5, you'll create a new `<elementSpec>` for it. When you want to modify an existing TEI element – perhaps by adding a new attribute, restricting its content model, or providing a more project-specific description – you'll also use `<elementSpec>`, but with a crucial difference: you'll reference the original TEI element using the `@ident` attribute.

Let's look at an example. Suppose your project on early modern recipes needs to introduce a new element, `<ingredient>`, to mark up specific components of a recipe, which isn't a standard TEI element. Your `<elementSpec>` for this new element might look like this:

```xml
<elementSpec ident="ingredient" module="recipes" mode="add">
  <gloss>An item used in a recipe</gloss>
  <desc>This element marks up a specific component or substance required for a recipe, often followed by a quantity.</desc>
  <contentModel>
    <textNode/>
  </contentModel>
  <attList>
    <attDef ident="quantity" usage="opt">
      <gloss>Amount of ingredient</gloss>
      <desc>Specifies the quantity of the ingredient, e.g., "2 cups", "a pinch".</desc>
      <datatype>
        <dataRef name="teidata.text"/>
      </datatype>
    </attDef>
  </attList>
</elementSpec>
```

In this example:
*   `@ident="ingredient"` gives our new element its name.
*   `@module="recipes"` assigns it to a logical module within your ODD, helping organize your customizations.
*   `@mode="add"` explicitly states that we are *adding* a new element to the TEI vocabulary.
*   `<gloss>` provides a short, concise definition.
*   `<desc>` offers a more detailed description, crucial for documentation.
*   `<contentModel>` specifies what kind of content the `<ingredient>` element can hold. Here, `<textNode/>` means it can contain plain text.
*   `<attList>` and `<attDef>` (which we'll explore more deeply in the next chapter) define a new optional attribute `@quantity` for our `<ingredient>` element.

Now, what if you want to modify an *existing* TEI element? Let's say for your recipe project, you want to ensure that every `<p>` (paragraph) element *must* contain a `<recipeInstruction>` element, which you've also defined elsewhere as a new element. This is a common pitfall: trying to define a new element that simply duplicates or slightly modifies an existing one without proper referencing. Instead, you would reference the existing `<p>` element and modify its properties. The key here is the `@ident` attribute, which must exactly match the name of the TEI element you are referencing.

```xml
<elementSpec ident="p" mode="change">
  <desc>A paragraph in this recipe text must contain at least one recipe instruction.</desc>
  <contentModel>
    <alternate>
      <elementRef key="recipeInstruction"/>
      <textNode/>
    </alternate>
  </contentModel>
</elementSpec>
```

Here, `@ident="p"` tells the ODD processor that we are modifying the standard TEI `<p>` element. `@mode="change"` indicates that we are altering its definition. The `<contentModel>` now specifies that a paragraph can contain either a `<recipeInstruction>` element or plain text. This is a simplification, as real content models can be much more complex, but it illustrates the principle. A common mistake here is to forget `@mode="change"` or to misspell the `@ident` attribute, which would lead the ODD processor to treat it as a *new* element rather than a modification of an existing one, resulting in an invalid ODD or an unexpected schema. Always ensure the `@ident` matches the TEI element name precisely when modifying. The `mode` attribute is critical: `add` for new elements, `change` for modifying existing ones, `delete` for removing elements (though `delete` is used with caution, as it can break compatibility). By carefully defining or adjusting elements with `<elementSpec>`, you begin to sculpt your project's unique TEI vocabulary.

#### Key concepts
*   **`<schemaSpec>`:** The root element of an ODD document, acting as a container for all customizations and definitions for a project-specific TEI schema.
*   **`<elementSpec>`:** An element within `<schemaSpec>` used to define a new TEI element or to modify the properties (description, content model, attributes) of an existing TETEI element.
*   **`@ident` attribute:** Used within `<elementSpec>` to specify the name of the element being defined or modified. For existing elements, this must match the TEI element name exactly.
*   **`@mode` attribute:** Used within `<elementSpec>` to indicate whether the element is being `add`ed, `change`d, or `delete`d from the schema.
*   **`<gloss>`:** A child element of `<elementSpec>` providing a short, concise definition or label for the element.
*   **`<desc>`:** A child element of `<elementSpec>` offering a more detailed description of the element's purpose and usage.
*   **`<contentModel>`:** A child element of `<elementSpec>` that defines what kind of content (e.g., child elements, text, mixed content) an element can contain.

#### Hands-on activity
**Defining a Project-Specific Element**
Imagine you are working on a corpus of historical legal documents. You need a way to specifically mark up references to legal precedents or statutes. The generic TEI `<ref>` element is too broad. You decide to create a new element, `<legalRef>`, that can contain plain text and must have an attribute `@jurisdiction` to specify the legal system (e.g., "English", "Roman", "Common Law").

1.  Write the `<elementSpec>` for this new `<legalRef>` element.
2.  Include a `<gloss>` and a `<desc>` for your new element.
3.  Define the `@jurisdiction` attribute within this `<elementSpec>`, making it mandatory (`usage="req"`) and specifying its data type as `teidata.text`.
4.  Ensure the `<contentModel>` allows for plain text.

**Starter Material:**
```xml
<schemaSpec ident="myLegalSchema" prefix="legal" docRoutes="teicorpus.rng">
  <elementSpec ident="legalRef" mode="add" module="legal">
    <!-- Your code here -->
  </elementSpec>
</schemaSpec>
```

#### Assessment idea
1.  **Question:** You are creating an ODD for a corpus of 18th-century scientific articles. You want to modify the existing TEI `<figure>` element to ensure it always includes a `<figDesc>` (figure description) and an `<graphic>` (graphic reference) element, and that it can also optionally contain a `<label>`. Write the `<elementSpec>` that achieves this modification, ensuring it uses the correct `@ident` and `@mode` attributes.
    *   **Model Response:**
        ```xml
        <elementSpec ident="figure" mode="change">
          <desc>A figure in this scientific corpus must always include a description and a graphic, and may optionally have a label.</desc>
          <contentModel>
            <sequence>
              <elementRef key="figDesc"/>
              <elementRef key="graphic"/>
              <optional>
                <elementRef key="label"/>
              </optional>
            </sequence>
          </contentModel>
        </elementSpec>
        ```

2.  **Question:** What is the primary function of the `@mode="add"` attribute within an `<elementSpec>`?
    a) It specifies that the element can only be used in specific XML documents.
    b) It indicates that a *new* element, not present in the generic TEI P5, is being introduced.
    c) It defines the default content model for the element.
    d) It marks the element as being part of an experimental feature set.
    *   **Correct Answer:** b) It indicates that a *new* element, not present in the generic TEI P5, is being introduced.

#### AI generation note
Develop a 12-minute interactive reading walkthrough. Display an ODD document on the left side of the screen, with the instructor's voiceover explaining each part of the `<schemaSpec>` and `<elementSpec>` as they are highlighted. On the right, show a live XML editor validating an example TEI document against a *hypothetically generated* schema from the ODD. Illustrate the difference between `@mode="add"` and `@mode="change"` with clear, color-coded examples. Include a mini-quiz after 8 minutes asking learners to identify the correct `@mode` for a given scenario. Provide a downloadable ODD template with placeholders for the hands-on activity. Ensure high-contrast visuals and readable fonts for the code examples.

### Chapter 6.3 — Defining Attributes and Attribute Classes in ODD

#### Learning objectives
*   Define custom attributes for specific elements using `<attDef>` within an ODD.
*   Explain the purpose and benefits of using attribute classes (`<attClass>`) for attribute reusability and consistency.
*   Demonstrate how to associate attribute classes with elements.
*   Identify common pitfalls in attribute definition and how to avoid them.

#### Detailed lesson content
Attributes are crucial for adding metadata and semantic distinctions to our TEI elements. While many standard TEI elements come with a rich set of predefined attributes, your project may require custom attributes to capture specific data points not covered by the generic guidelines. This is where `<attDef>` comes into play within your ODD. Nested inside an `<attList>` within an `<elementSpec>`, `<attDef>` allows you to precisely define new attributes or modify existing ones.

Let's revisit our `<ingredient>` example from the previous chapter. We defined a `@quantity` attribute. Here's a more complete look at its definition:

```xml
<elementSpec ident="ingredient" module="recipes" mode="add">
  <gloss>An item used in a recipe</gloss>
  <desc>This element marks up a specific component or substance required for a recipe.</desc>
  <contentModel><textNode/></contentModel>
  <attList>
    <attDef ident="quantity" usage="opt">
      <gloss>Amount of ingredient</gloss>
      <desc>Specifies the quantity of the ingredient, e.g., "2 cups", "a pinch".</desc>
      <datatype>
        <dataRef name="teidata.text"/>
      </datatype>
    </attDef>
    <attDef ident="state" usage="opt">
      <gloss>Physical state of ingredient</gloss>
      <desc>Describes the physical state of the ingredient, such as "chopped", "melted", "powdered".</desc>
      <valList type="closed">
        <valItem ident="chopped"><gloss>Chopped</gloss></valItem>
        <valItem ident="melted"><gloss>Melted</gloss></valItem>
        <valItem ident="powdered"><gloss>Powdered</gloss></valItem>
        <valItem ident="whole"><gloss>Whole</gloss></valItem>
      </valList>
    </attDef>
  </attList>
</elementSpec>
```

In this expanded example, we've added a new optional attribute `@state`. Notice the `<valList type="closed">` within this `<attDef>`. This is incredibly powerful for enforcing consistency. Instead of allowing any text value for `@state`, we've restricted it to a predefined set of values: "chopped", "melted", "powdered", or "whole". This prevents typos and ensures that all encoders use the same terminology, making your data much more consistent and queryable. The `@usage` attribute is also critical: `req` for required, `opt` for optional, and `rec` for recommended. Choosing `req` means that any instance of `<ingredient>` *must* have this attribute, otherwise the document will be invalid against your generated schema.

While defining attributes directly within `<elementSpec>` is straightforward, what if you have the same attribute, or a group of attributes, that you want to apply to *multiple* elements? Manually duplicating `<attDef>` blocks for each element is not only tedious but also prone to error and makes future modifications difficult. This is where **attribute classes** (`<attClass>`) become indispensable. An attribute class is essentially a named collection of attributes that can be associated with one or more elements. It promotes reusability, consistency, and simplifies maintenance.

Imagine your project requires a `@source` attribute (to indicate the origin of information) and a `@certainty` attribute (to express confidence in the encoded data) on several elements, such as `<persName>`, `<placeName>`, and even your custom `<ingredient>`. Instead of defining these attributes individually for each of those `<elementSpec>`s, you can define an attribute class:

```xml
<attClass ident="sourceAndCertainty" mode="add">
  <gloss>Attributes for source and certainty</gloss>
  <desc>Provides attributes to record the source of information and the certainty of the encoded data.</desc>
  <attList>
    <attDef ident="source" usage="opt">
      <gloss>Source of information</gloss>
      <desc>Indicates the source from which the encoded information was derived (e.g., "archival document", "secondary literature").</desc>
      <datatype><dataRef name="teidata.text"/></datatype>
    </attDef>
    <attDef ident="certainty" usage="opt">
      <gloss>Certainty of data</gloss>
      <desc>Expresses the encoder's confidence in the accuracy of the encoded data.</desc>
      <valList type="closed">
        <valItem ident="high"/><valItem ident="medium"/><valItem ident="low"/>
      </valList>
    </attDef>
  </attList>
</attClass>
```

Once defined, you can associate this attribute class with any `<elementSpec>` using the `<attClassRef>` element:

```xml
<elementSpec ident="persName" mode="change">
  <desc>A person's name, with added source and certainty attributes.</desc>
  <attClassRef key="sourceAndCertainty"/>
</elementSpec>

<elementSpec ident="placeName" mode="change">
  <desc>A place name, with added source and certainty attributes.</desc>
  <attClassRef key="sourceAndCertainty"/>
</elementSpec>

<elementSpec ident="ingredient" mode="change">
  <desc>An ingredient, now also with source and certainty attributes.</desc>
  <attClassRef key="sourceAndCertainty"/>
  <!-- Existing attList for quantity and state would go here, or be merged -->
</elementSpec>
```

By adding `<attClassRef key="sourceAndCertainty"/>` to the `<elementSpec>` for `<persName>`, `<placeName>`, and `<ingredient>`, all the attributes defined within the `sourceAndCertainty` class (i.e., `@source` and `@certainty`) will automatically become available on these elements in your generated schema. This significantly reduces redundancy and ensures that if you ever need to change the definition of `@source` or `@certainty`, you only need to do it in one place (within the `<attClass>`), and the change will propagate to all associated elements. A common mistake is to forget to add `mode="add"` to the `<attClass>` definition, or to misspell the `key` attribute in `<attClassRef>`, which would prevent the attributes from being correctly linked. Always double-check these identifiers. Attribute classes are a cornerstone of efficient and maintainable ODD development, particularly for large and complex digital humanities projects.

#### Key concepts
*   **`<attDef>`:** An element within `<attList>` (inside `<elementSpec>` or `<attClass>`) used to define a single attribute, including its name, usage, description, and allowed values.
*   **`@usage` attribute:** Specifies whether an attribute is `req`uired, `opt`ional, or `rec`ommended for an element.
*   **`<valList>`:** A child element of `<attDef>` used to define a closed or open list of allowed values for an attribute.
*   **`<valItem>`:** A child element of `<valList>` representing a single allowed value for an attribute.
*   **`<datatype>`:** A child element of `<attDef>` used to specify the data type of an attribute, often referencing a TEI predefined data type like `teidata.text` or `teidata.date`.
*   **`<attClass>`:** An element within `<schemaSpec>` that defines a reusable collection of attributes.
*   **`<attClassRef>`:** An element within `<elementSpec>` used to associate an attribute class (defined by `<attClass>`) with a specific element, thereby applying all attributes from that class to the element.

#### Hands-on activity
**Creating and Applying an Attribute Class**
For your project on historical legal documents, you realize that many elements (e.g., `<persName>`, `<placeName>`, `<event>`) need to indicate the *certainty* of the information and the *date* it was last verified.

1.  Create a new `<attClass>` named `verificationAttributes` with `mode="add"`.
2.  Within this class, define two optional attributes:
    *   `@certainty`: A closed list with values "high", "medium", "low".
    *   `@verifiedDate`: A date attribute, using `teidata.date` as its datatype.
3.  Modify the `<elementSpec>` for `<legalRef>` (from the previous activity) to include these `verificationAttributes` using `<attClassRef>`.
4.  Add a short `<desc>` to both the `<attClass>` and each `<attDef>`.

**Starter Material:**
```xml
<schemaSpec ident="myLegalSchema" prefix="legal" docRoutes="teicorpus.rng">

  <attClass ident="verificationAttributes" mode="add">
    <!-- Define @certainty and @verifiedDate here -->
  </attClass>

  <elementSpec ident="legalRef" mode="add" module="legal">
    <gloss>A reference to a legal precedent or statute.</gloss>
    <desc>This element marks up specific references to legal precedents or statutes, requiring a jurisdiction.</desc>
    <contentModel><textNode/></contentModel>
    <attList>
      <attDef ident="jurisdiction" usage="req">
        <gloss>Legal jurisdiction</gloss>
        <desc>Specifies the legal system the reference belongs to (e.g., "English", "Roman").</desc>
        <datatype><dataRef name="teidata.text"/></datatype>
      </attDef>
    </attList>
    <!-- Add attClassRef here -->
  </elementSpec>

</schemaSpec>
```

#### Assessment idea
1.  **Question:** You are designing an ODD for a corpus of literary letters. You want to ensure that every `<dateline>` element (which typically contains the date and place a letter was written) *must* include an `@calendar` attribute with a closed list of values ("gregorian", "julian") and *may* include an `@precision` attribute with values "day", "month", "year". Write the ODD definitions for these attributes, showing how you would define them within the `<elementSpec>` for `<dateline>`.
    *   **Model Response:**
        ```xml
        <elementSpec ident="dateline" mode="change">
          <desc>The place and date of origin of a letter, with required calendar and optional precision.</desc>
          <attList>
            <attDef ident="calendar" usage="req">
              <gloss>Calendar system</gloss>
              <desc>Specifies the calendar system used for the date.</desc>
              <valList type="closed">
                <valItem ident="gregorian"/>
                <valItem ident="julian"/>
              </valList>
            </attDef>
            <attDef ident="precision" usage="opt">
              <gloss>Precision of date</gloss>
              <desc>Indicates the level of precision for the date.</desc>
              <valList type="closed">
                <valItem ident="day"/>
                <valItem ident="month"/>
                <valItem ident="year"/>
              </valList>
            </attDef>
          </attList>
        </elementSpec>
        ```

2.  **Question:** Explain the primary advantage of using an `<attClass>` over defining the same attributes repeatedly within multiple `<elementSpec>`s. Provide a scenario where `<attClass>` would be particularly beneficial.
    *   **Model Response:** The primary advantage of using an `<attClass>` is **reusability and maintainability**. Instead of duplicating the same `<attDef>` blocks across multiple `<elementSpec>`s, an `<attClass>` allows you to define a set of attributes once and then simply reference that class using `<attClassRef>` in any element where those attributes are needed. This significantly reduces redundancy in the ODD. A scenario where this is beneficial is a large project with many elements that all need common metadata, such as `@resp` (responsible party), `@cert` (certainty), or `@source`. If you later decide to modify the definition of `@cert` (e.g., add a new allowed value), you only need to change it in the single `<attClass>` definition, and the change will automatically apply to all elements referencing that class, rather than having to manually update every single element definition.

#### AI generation note
Create a 10-minute interactive coding tutorial. The screen should primarily display an XML editor with an ODD document. The instructor's voiceover guides learners through defining a new attribute with a closed `valList` for an existing TEI element (e.g., `<name>`). Then, demonstrate the creation of an `<attClass>` with two attributes and show how to apply it to two different `<elementSpec>`s using `<attClassRef>`. Include interactive "drag-and-drop" exercises where learners match attributes to their correct `<attDef>` properties. Highlight common syntax errors and how to debug them. Provide a downloadable ODD file with the examples. Ensure all code is clearly visible and syntax-highlighted.

### Chapter 6.4 — Customizing Content Models: `contentModel` and `valList`

#### Learning objectives
*   Understand how to modify the content model of an element using `<contentModel>` within an ODD.
*   Utilize elements like `<textNode>`, `<elementRef>`, `<sequence>`, `<alternate>`, and `<optional>` to define complex content models.
*   Explain the function of `<valList>` for restricting attribute values and its types (`closed`, `open`).
*   Identify common errors in defining content models and attribute value lists.

#### Detailed lesson content
One of the most powerful aspects of ODD customization lies in its ability to precisely control the **content model** of an element. The content model dictates what an element can contain: plain text, other elements, a mix of both, or nothing at all (empty elements). While the generic TEI P5 provides flexible content models, your project might require stricter enforcement or specific combinations of child elements. The `<contentModel>` element within an `<elementSpec>` is your primary tool for this.

Within `<contentModel>`, you'll use a set of specialized elements to define the permissible children and their order or frequency. These elements mirror the constructs found in schema languages like RELAX NG or XML Schema:

*   **`<textNode/>`**: Indicates that the element can contain plain text.
*   **`<elementRef key="elementName"/>`**: References another TEI element, specifying that it can be a child. The `@key` attribute must match the `ident` of the referenced element.
*   **`<sequence>`**: Specifies that child elements must appear in a particular order.
*   **`<alternate>`**: Specifies that one of several child elements can appear (OR relationship).
*   **`<optional>`**: Makes a child element or group of elements optional.
*   **`<zeroOrMore>` / `<oneOrMore>`**: Specifies the repetition of child elements.

Let's consider an example. Suppose for your digital edition of 17th-century travelogues, you want to ensure that every `<entry>` (a diary entry) *must* begin with a `<dateline>`, followed by one or more `<p>` elements, and optionally end with a `<signature>`. This is a much stricter structure than the generic TEI `<entry>` might allow.

```xml
<elementSpec ident="entry" mode="change">
  <desc>A diary entry in this travelogue must start with a dateline, followed by paragraphs, and may end with a signature.</desc>
  <contentModel>
    <sequence>
      <elementRef key="dateline"/>
      <oneOrMore>
        <elementRef key="p"/>
      </oneOrMore>
      <optional>
        <elementRef key="signature"/>
      </optional>
    </sequence>
  </contentModel>
</elementSpec>
```

In this content model:
1.  `<elementRef key="dateline"/>` mandates that a `<dateline>` element comes first.
2.  `<oneOrMore><elementRef key="p"/></oneOrMore>` ensures that at least one `<p>` element follows.
3.  `<optional><elementRef key="signature"/></optional>` makes a `<signature>` element an optional final child.

A common mistake when defining content models is to forget the order or cardinality. Forgetting `<sequence>` when order matters, or omitting `<oneOrMore>` when at least one instance is required, can lead to schemas that are either too permissive or too restrictive for your actual data. Another pitfall is to define a content model that results in an "unreachable" element, e.g., if you specify `<sequence><textNode/><elementRef key="p"/></sequence>`, the `<p>` element would never be reached if the text node consumes all content. For mixed content (text and elements), `<textNode/>` is often placed within an `<alternate>` or at the beginning of a `<sequence>` alongside other elements.

Beyond content models, we can also use `<valList>` to constrain the values of attributes, as briefly touched upon in the previous chapter. This is crucial for data consistency and queryability. The `@type` attribute on `<valList>` determines its behavior:

*   **`type="closed"`**: Only the values explicitly listed within `<valItem>` elements are allowed. This is ideal for controlled vocabularies.
*   **`type="open"`**: The listed values are recommended, but other values are also permitted. This provides guidance without strict enforcement.
*   **`type="semi"`**: A combination, where listed values are allowed, and other values are permitted but require a warning during validation.

Let's refine our `@state` attribute for `<ingredient>` using `<valList type="closed">`:

```xml
<attDef ident="state" usage="opt">
  <gloss>Physical state of ingredient</gloss>
  <desc>Describes the physical state of the ingredient, such as "chopped", "melted", "powdered".</desc>
  <valList type="closed">
    <valItem ident="chopped"><gloss>Chopped</gloss></valItem>
    <valItem ident="melted"><gloss>Melted</gloss></valItem>
    <valItem ident="powdered"><gloss>Powdered</gloss></valItem>
    <valItem ident="whole"><gloss>Whole</gloss></valItem>
  </valList>
</attDef>
```

Here, `type="closed"` ensures that an encoder can *only* use "chopped", "melted", "powdered", or "whole" for the `@state` attribute. Any other value will cause a validation error. This is invaluable for maintaining data quality in large projects. If you wanted to allow for other states but still suggest these, you would use `type="open"`. When defining `<valItem>`s, it's good practice to provide an `@ident` for machine readability and a `<gloss>` for human readability. Understanding and skillfully applying `<contentModel>` and `<valList>` allows you to craft highly precise and robust project-specific TEI schemas, moving your encoding from descriptive to truly prescriptive.

#### Key concepts
*   **`<contentModel>`:** An element within `<elementSpec>` that defines the allowed child elements, text content, and their order/frequency for a given TEI element.
*   **`<textNode/>`:** Represents plain text content within a content model.
*   **`<elementRef key="elementName"/>`:** References a specific TEI element that is allowed as a child.
*   **`<sequence>`:** A content model operator indicating that child elements must appear in the specified order.
*   **`<alternate>`:** A content model operator indicating that one of several child elements is allowed (logical OR).
*   **`<optional>`:** A content model operator making a child element or group of elements optional.
*   **`<zeroOrMore>` / `<oneOrMore>`:** Content model operators specifying that a child element or group can appear zero or more times, or one or more times, respectively.
*   **`<valList type="closed">`:** An attribute value list that strictly limits allowed values to those explicitly listed.
*   **`<valList type="open">`:** An attribute value list that recommends specific values but allows others.
*   **`<valItem>`:** An element within `<valList>` defining a single allowed value for an attribute.

#### Hands-on activity
**Designing a Complex Content Model and Restricted Value List**
For a project encoding early modern scientific experiments, you have a custom element `<experiment>`. You want to define its content model and an attribute for its `<result>` child element.

1.  The `<experiment>` element must contain:
    *   An optional `<experimenter>` (a new element you'd define elsewhere, but reference here).
    *   Exactly one `<apparatus>` (another new element).
    *   One or more `<procedure>` elements.
    *   Exactly one `<result>` element.
    *   The `<result>` element itself can contain plain text.
2.  The `<result>` element needs a mandatory attribute `@outcome` with a closed list of values: "success", "failure", "inconclusive".

Write the `<elementSpec>` for `<experiment>` including its `<contentModel>`, and the `<attDef>` for the `@outcome` attribute within the (hypothetical) `<elementSpec>` for `<result>`.

**Starter Material:**
```xml
<schemaSpec ident="scientificExperiments" prefix="sci" docRoutes="teicorpus.rng">

  <elementSpec ident="experimenter" mode="add">
    <gloss>Person conducting the experiment</gloss>
    <desc>Identifies the individual or group performing the scientific experiment.</desc>
    <contentModel><textNode/></contentModel>
  </elementSpec>

  <elementSpec ident="apparatus" mode="add">
    <gloss>Equipment used in experiment</gloss>
    <desc>Describes the scientific equipment or setup used for the experiment.</desc>
    <contentModel><textNode/></contentModel>
  </elementSpec>

  <elementSpec ident="procedure" mode="add">
    <gloss>Steps of the experiment</gloss>
    <desc>Details the sequence of actions and observations performed during the experiment.</desc>
    <contentModel><textNode/></contentModel>
  </elementSpec>

  <elementSpec ident="result" mode="add">
    <gloss>Outcome of the experiment</gloss>
    <desc>Records the findings or conclusions drawn from the experiment.</desc>
    <contentModel><textNode/></contentModel>
    <attList>
      <!-- Define @outcome here -->
    </attList>
  </elementSpec>

  <elementSpec ident="experiment" mode="add" module="science">
    <gloss>A scientific experiment</gloss>
    <desc>Encodes a single scientific experiment, detailing its components and outcome.</desc>
    <contentModel>
      <!-- Define content model here -->
    </contentModel>
  </elementSpec>

</schemaSpec>
```

#### Assessment idea
1.  **Question:** You are customizing the TEI `<div type="chapter">` element for a novel. You want each chapter to *always* start with a `<head>` (chapter title), followed by one or more `<p>` elements, and then optionally end with a `<trailer>` (e.g., "The End"). Write the `<elementSpec>` for `<div type="chapter">` to enforce this content model.
    *   **Model Response:**
        ```xml
        <elementSpec ident="div" mode="change">
          <desc>A chapter division in this novel, requiring specific content structure.</desc>
          <constraintSpec ident="chapterDivContent" scheme="schematron">
            <constraint>
              <specGrpRef target="div.chapter"/>
              <p>This constraint applies specifically to div elements with @type="chapter".</p>
              <assert test="@type = 'chapter'">
                <message>The content model defined here only applies to div elements with @type="chapter".</message>
              </assert>
            </constraint>
          </constraintSpec>
          <contentModel>
            <sequence>
              <elementRef key="head"/>
              <oneOrMore>
                <elementRef key="p"/>
              </oneOrMore>
              <optional>
                <elementRef key="trailer"/>
              </optional>
            </sequence>
          </contentModel>
        </elementSpec>
        ```
        *(* `div`s. To constrain by attribute value like `@type="chapter"`, one would typically use `<constraintSpec>` with Schematron, or define a new element like `<chapter>` and map it to `div` with `@type="chapter"` later. For simplicity and directness of the content model exercise, I'll provide the content model for `div` and add a note about the attribute constraint, as the core of the question is about the content model operators.)*
        *(Revised Model Response for direct content model application, acknowledging the limitation for `@type` in `<elementSpec>` directly):*
        ```xml
        <elementSpec ident="div" mode="change">
          <desc>A generic division, here modified to illustrate a chapter-like structure. Note: To apply this strictly to @type="chapter", further ODD mechanisms like model classes or Schematron constraints would be needed.</desc>
          <contentModel>
            <sequence>
              <elementRef key="head"/>
              <oneOrMore>
                <elementRef key="p"/>
              </oneOrMore>
              <optional>
                <elementRef key="trailer"/>
              </optional>
            </sequence>
          </contentModel>
        </elementSpec>
        ```
        *(Further * `div`s, it's common in ODD tutorials to show how to structure content within an element, even if the `type` attribute itself isn't directly enforced in the `<contentModel>` of the `elementSpec`. The core request is about content model operators. I'll provide a response that focuses on the content model, and add a note about the `type` attribute. Or, better, define a *new* element `<chapter>` and show its content model, then explain how it could map to `div type="chapter"`.)*

        *(Final approach for Q1: Define a new element `<chapter>` and its content model, then explain how this new element can be used instead of `div type="chapter"` or how `div` could be constrained using other ODD features. This is more aligned with ODD best practices for creating project-specific elements.)*

        **Model Response (Revised):** For a novel, it's often clearer to define a new element `<chapter>` rather than trying to heavily constrain the generic `div` based on its `@type` attribute directly within `<elementSpec>`'s content model. We can then later map `<chapter>` to `div` with `@type="chapter"` if needed.
        ```xml
        <elementSpec ident="chapter" mode="add" module="novel">
          <gloss>A chapter in a novel</gloss>
          <desc>Represents a chapter in a novel, with a specific required structure.</desc>
          <contentModel>
            <sequence>
              <elementRef key="head"/>
              <oneOrMore>
                <elementRef key="p"/>
              </oneOrMore>
              <optional>
                <elementRef key="trailer"/>
              </optional>
            </sequence>
          </contentModel>
        </elementSpec>
        ```
        This `<elementSpec>` for a new `<chapter>` element ensures that each chapter starts with a `<head>`, followed by one or more `<p>` elements, and optionally ends with a `<trailer>`. This provides a robust, project-specific structure that can be validated.

2.  **Question:** Explain the difference between `<valList type="closed">` and `<valList type="open">` for an attribute definition. When would you choose one over the other?
    *   **Model Response:**
        *   **`<valList type="closed">`**: This type of value list strictly limits the allowed values for an attribute to *only* those explicitly listed within the `<valItem>` elements. If an encoder uses any value not in the list, the XML document will be considered invalid against the generated schema. You would choose `type="closed"` when you need to enforce a precise, controlled vocabulary, ensuring absolute consistency and facilitating unambiguous querying (e.g., for `@gender` with values "male", "female", "nonbinary", or `@status` with "draft", "final", "archived").
        *   **`<valList type="open">`**: This type of value list suggests a set of recommended values but *also permits* other values not explicitly listed. The listed values serve as guidance, but the schema will not flag other values as errors. You would choose `type="open"` when you want to provide common or preferred options, but acknowledge that the vocabulary might need to be extended by encoders for unforeseen cases, without breaking validation (e.g., for `@type` on `<note>` where you might suggest "editorial", "authorial", but allow for other specific note types).

#### AI generation note
Produce a 15-minute interactive simulation. The screen shows a partially completed ODD document on the left and a live preview of the generated schema's effect on sample XML on the right. The instructor's voiceover guides learners through modifying the `<contentModel>` of a custom element. Use interactive drag-and-drop elements for `<sequence>`, `<alternate>`, `<optional>`, and `<oneOrMore>` to build the content model step-by-step. Then, demonstrate adding a `<valList type="closed">` to an attribute and show how entering an invalid value in the sample XML triggers a validation error. Include a "challenge mode" where learners are given a content model requirement and must select the correct ODD elements to build it. Provide a downloadable ODD exercise file. Ensure clear visual feedback for correct/incorrect choices.

### Chapter 6.5 — Documenting Your Customizations: `desc` and `gloss`

#### Learning objectives
*   Recognize the critical importance of comprehensive documentation within an ODD file.
*   Distinguish between the purpose and usage of `<gloss>` and `<desc>` elements for documenting customizations.
*   Apply best practices for writing clear, concise, and informative `<gloss>` and `<desc>` content.
*   Understand how ODD documentation contributes to the sustainability and reusability of scholarly encoding projects.

#### Detailed lesson content
While the technical precision of `<elementSpec>`, `<attDef>`, and `<contentModel>` is essential for generating a valid schema, the human element of **documentation** is equally, if not more, critical for the long-term success, usability, and sustainability of your TEI project. An ODD file is not just a machine-readable set of rules; it's also a human-readable guide to your project's encoding decisions. Without clear and comprehensive documentation, even the most perfectly constructed schema can become a black box, difficult for new team members to understand, challenging for future researchers to interpret, and nearly impossible to maintain or adapt. The TEI Guidelines themselves are a testament to the power of thorough documentation, and your ODD should aspire to the same standard.

The primary elements for documentation within an ODD are `<gloss>` and `<desc>`. You've encountered them in previous chapters, but now we'll focus on their specific roles and best practices for their use.

*   **`<gloss>`**: This element provides a **short, concise, and unambiguous definition or label** for an element, attribute, or attribute value. Think of it as the "dictionary entry" for your customization. It should be brief enough to be quickly understood, often just a few words or a single sentence. Its primary purpose is quick reference and to appear in generated documentation or user interfaces as a summary.

    *   **Good `<gloss>` example for an element:** `<gloss>A historical legal reference</gloss>`
    *   **Good `<gloss>` example for an attribute:** `<gloss>Legal jurisdiction</gloss>`
    *   **Good `<gloss>` example for an attribute value:** `<gloss>English Common Law</gloss>`
    *   **Common mistake:** Making a `<gloss>` too long or trying to explain usage within it. That's the job of `<desc>`.

*   **`<desc>`**: This element provides a **detailed, explanatory description** of an element, attribute, or attribute value. It's where you elaborate on its purpose, provide usage examples, clarify its relationship to other elements, explain any constraints, and justify your design choices. The `<desc>` is crucial for helping encoders understand *how* to use the element or attribute correctly and *why* it was defined in a particular way. It should be written in clear, professional prose, as if you are explaining it to a new team member or a future scholar.

    *   **Good `<desc>` example for an element (`<legalRef>`):**
        ```xml
        <desc>This element marks up specific references to legal precedents, statutes, or cases within a historical legal document. It is designed to capture the exact textual reference while also allowing for structured metadata about the jurisdiction and the certainty of the identification. Use it to enclose the full textual citation as it appears in the source, rather than a normalized form, which should be captured in attributes or linked data.</desc>
        ```
    *   **Good `<desc>` example for an attribute (`@jurisdiction`):**
        ```xml
        <desc>Specifies the legal system or jurisdiction to which the referenced legal precedent or statute belongs. This is crucial for distinguishing between different legal traditions (e.g., "English Common Law", "Roman Law", "Canon Law") that may be cited within the same document. The value should be a controlled term from the project's authority list, if applicable, to ensure consistency.</desc>
        ```
    *   **Common mistake:** Leaving `<desc>` empty or providing only a superficial explanation. This defeats the purpose of detailed documentation. Another pitfall is to repeat the `<gloss>` verbatim in the `<desc>`, which is redundant.

The power of ODD documentation extends beyond individual elements and attributes. You should also provide a comprehensive `<desc>` for your entire `<schemaSpec>` to explain the overall purpose of your custom schema, its scope, and any major design principles. For instance:

```xml
<schemaSpec ident="myLegalSchema" prefix="legal" docRoutes="teicorpus.rng">
  <desc>This ODD defines a project-specific TEI schema for the "Early Modern Legal Documents" project. It extends the core TEI P5 by introducing specialized elements for legal references, specific types of marginalia, and a robust system for tracking editorial certainty and source attribution. The schema aims to support fine-grained analysis of legal discourse and the historical evolution of legal terminology. It is designed to be highly prescriptive to ensure consistency across a large corpus encoded by multiple researchers.</desc>
  <!-- ... rest of the ODD ... -->
</schemaSpec>
```

This overarching description provides essential context. Remember that ODDs are often used to generate human-readable documentation (like HTML web pages) in addition to machine-readable schemas. Well-written `<gloss>` and `<desc>` elements directly populate these documentation outputs, making your project's encoding rules transparent and accessible to a wider audience. This commitment to clear documentation is a hallmark of rigorous digital scholarship and ensures that your project's data remains understandable and usable for decades to come, far beyond the initial encoding phase. It's an investment in the longevity and impact of your work.

#### Key concepts
*   **Documentation:** The process of providing explanatory information within an ODD to clarify the purpose, usage, and design choices of custom elements, attributes, and the schema as a whole.
*   **`<gloss>`:** A short, concise definition or label for an element, attribute, or attribute value, primarily used for quick reference and summary displays.
*   **`<desc>`:** A detailed, explanatory description of an element, attribute, or attribute value, providing context, usage guidelines, examples, and design justifications.
*   **Sustainability:** The ability of a digital project to remain functional, accessible, and understandable over the long term, heavily reliant on thorough documentation.
*   **Reusability:** The capacity for a project's data or schema to be adapted and used by other researchers or projects, greatly enhanced by clear documentation.

#### Hands-on activity
**Documenting Your Custom `<experiment>` Element**
Take the `<experiment>` element and its associated `<result>` element with the `@outcome` attribute from the previous chapter's hands-on activity.

1.  Write a comprehensive `<desc>` for the `<experiment>` element, explaining its purpose in the context of early modern scientific experiments, what kind of content it's expected to contain, and its relationship to other elements you might define (e.g., `<experimenter>`, `<apparatus>`).
2.  Write a detailed `<desc>` for the `@outcome` attribute on the `<result>` element. Explain what the attribute signifies, why a closed list of values ("success", "failure", "inconclusive") was chosen, and what each value implies for the interpretation of the experiment's results.
3.  Ensure both `<gloss>` and `<desc>` are distinct and fulfill their respective roles.

**Starter Material (from previous activity):**
```xml
<elementSpec ident="experiment" mode="add" module="science">
  <gloss>A scientific experiment</gloss>
  <!-- Write your detailed desc here -->
  <contentModel>
    <sequence>
      <optional><elementRef key="experimenter"/></optional>
      <elementRef key="apparatus"/>
      <oneOrMore><elementRef key="procedure"/></oneOrMore>
      <elementRef key="result"/>
    </sequence>
  </contentModel>
</elementSpec>

<elementSpec ident="result" mode="add">
  <gloss>Outcome of the experiment</gloss>
  <!-- Write your detailed desc here -->
  <contentModel><textNode/></contentModel>
  <attList>
    <attDef ident="outcome" usage="req">
      <gloss>Result of the experiment</gloss>
      <!-- Write your detailed desc here -->
      <valList type="closed">
        <valItem ident="success"/>
        <valItem ident="failure"/>
        <valItem ident="inconclusive"/>
      </valList>
    </attDef>
  </attList>
</elementSpec>
```

#### Assessment idea
1.  **Question:** You are reviewing an ODD for a project encoding historical recipes. You find the following entry:
    ```xml
    <elementSpec ident="utensil" mode="add">
      <gloss>A kitchen tool</gloss>
      <desc>A kitchen tool.</desc>
      <contentModel><textNode/></contentModel>
    </elementSpec>
    ```
    Critique the documentation provided for the `<utensil>` element. What are its shortcomings, and how would you improve both the `<gloss>` and `<desc>` to meet best practices?
    *   **Model Response:** The documentation for `<utensil>` is insufficient and fails to meet best practices.
        *   **Shortcomings:**
            *   The `<gloss>` "A kitchen tool" is acceptable in its brevity but could be slightly more specific if the project has a particular focus (e.g., "A specific kitchen implement used in a recipe").
            *   The `<desc>` "A kitchen tool." is entirely inadequate. It merely repeats the gloss and provides no additional context, usage guidance, or justification. It's a common mistake to leave the `<desc>` superficial.
        *   **Improvements:**
            *   **Improved `<gloss>`:** `<gloss>A kitchen implement or tool</gloss>` (Slightly more formal and precise).
            *   **Improved `<desc>`:**
                ```xml
                <desc>This element is used to mark up specific kitchen implements or tools mentioned within a recipe's instructions or ingredient list. It should enclose the name of the tool as it appears in the source text (e.g., "skillet", "whisk", "mortar and pestle"). This element helps in identifying the material culture of cooking and allows for analysis of tool usage patterns across the corpus. Consider using `@type` to categorize tools (e.g., "cooking vessel", "mixing tool") if further granularity is required.</desc>
                ```
                This improved `<desc>` explains the element's purpose, provides usage guidance, gives examples, and hints at potential analytical benefits, making it far more valuable for encoders and future researchers.

2.  **Question:** Why is it considered a best practice to provide a detailed `<desc>` for the entire `<schemaSpec>` element at the beginning of your ODD file?
    *   **Model Response:** Providing a detailed `<desc>` for the `<schemaSpec>` is a best practice because it offers an **overarching context and rationale** for the entire custom schema. It acts as an executive summary for your project's encoding philosophy. This description should articulate:
        *   The **overall purpose** of the custom schema (e.g., "to encode 17th-century scientific experiments").
        *   Its **scope** and what types of texts or phenomena it is designed to handle.
        *   Any **major design principles** or theoretical frameworks that guided the customization (e.g., "emphasis on diplomatic transcription," "focus on named entities").
        *   How it **extends or constrains** the generic TEI P5.
        *   This high-level documentation is crucial for new project members to quickly grasp the project's encoding strategy, for external researchers to understand the data's structure, and for ensuring long-term maintainability and reusability. Without it, understanding the "why" behind specific element or attribute choices becomes much harder.

#### AI generation note
Create an 8-minute video lecture with a contemplative, scholarly tone. Use a split-screen view: the left side displays an ODD document with `<gloss>` and `<desc>` elements highlighted, and the right side shows examples of *poorly* documented ODD sections contrasted with *well-documented* ones. The instructor's voiceover provides a detailed critique of the poor examples and explains the principles behind effective documentation. Include a short segment demonstrating how ODD documentation translates into human-readable web pages using a tool like Roma. End with a reflection prompt asking learners to consider the audience for their ODD documentation. Ensure full captions and a downloadable checklist for good ODD documentation.

### Chapter 6.6 — Generating Schemas from ODD: RELAX NG, DTD, and XML Schema

#### Learning objectives
*   Explain the process of transforming an ODD document into a usable schema file.
*   Differentiate between the primary schema languages (RELAX NG, DTD, XML Schema) that can be generated from an ODD.
*   Discuss the advantages and disadvantages of each schema language for TEI projects.
*   Demonstrate how to use tools like Roma or `teitooled` to generate and validate schemas.

#### Detailed lesson content
An ODD document, while human-readable and itself a valid TEI XML file, is not directly used by XML editors or parsers for validation. Its ultimate purpose is to serve as the source from which **machine-readable schemas** are generated. These generated schemas are the actual rulebooks that your XML editor uses to check if your TEI documents conform to your project's specific encoding guidelines. The TEI community primarily supports the generation of three major schema languages from an ODD: RELAX NG (RNG), Document Type Definition (DTD), and W3C XML Schema (XSD). Each has its strengths and weaknesses, and the choice often depends on your project's specific tooling, validation requirements, and historical context.

The process of generating these schemas typically involves a transformation tool. The most common and officially supported tool is **Roma**, a web-based service provided by the TEI Consortium (at `https://roma.tei-c.org/`). Roma allows you to upload your ODD, select the desired schema language (RNG, DTD, XSD), and download the generated schema file. For command-line users or those integrating schema generation into automated workflows, the `teitooled` Python library offers similar functionality.

Let's briefly compare the three schema languages:

1.  **RELAX NG (RNG)**:
    *   **Advantages:** Generally considered the most expressive and easiest to read and write among the schema languages. It handles mixed content and complex content models very gracefully. It's also agnostic to XML namespaces, making it flexible. Many modern XML editors (like Oxygen XML Editor) have excellent support for RELAX NG. It's often the preferred choice within the TEI community for its clarity and power.
    *   **Disadvantages:** Less widely adopted outside of specific communities (like TEI) compared to DTD or XML Schema. Some older tools might not support it natively.
    *   **When to use:** Recommended for most new TEI projects due to its expressiveness and ease of use.

2.  **Document Type Definition (DTD)**:
    *   **Advantages:** The oldest and most universally supported XML schema language. Almost any XML parser or editor can validate against a DTD. Simple to understand for basic structures.
    *   **Disadvantages:** Limited expressiveness compared to RNG or XSD. Struggles with complex content models, data typing, and mixed content. Cannot enforce data types for attributes beyond simple enumeration or string. Does not support namespaces well.
    *   **When to use:** If you have legacy tools that *only* support DTDs, or if your project's schema is extremely simple and doesn't require advanced validation. Generally, it's advised to move away from DTDs for complex TEI projects.

3.  **W3C XML Schema (XSD)**:
    *   **Advantages:** Very powerful and expressive, offering strong data typing, namespace support, and advanced content model features. It's a W3C standard, making it widely supported in enterprise environments and by many programming languages.
    *   **Disadvantages:** Can be verbose and complex to write and read, especially for human authors. Its verbosity can make it harder to debug. The TEI community has sometimes found its expressiveness for mixed content slightly less intuitive than RELAX NG.
    *   **When to use:** If your project needs to integrate tightly with other XSD-validated XML ecosystems, or if you have strong requirements for specific data types that XSD handles particularly well, and you have tools that primarily support XSD.

**The Generation Process (Conceptual Steps):**

1.  **Write your ODD:** Define all your `<elementSpec>`, `<attDef>`, `<attClass>`, `<contentModel>`, `<gloss>`, and `<desc>` elements.
2.  **Upload to Roma (or use `teitooled`):** Access the Roma web interface or run the `teitooled` command-line utility.
3.  **Select target schema language:** Choose RELAX NG, DTD, or XML Schema.
4.  **Generate and Download:** The tool processes your ODD, applying all the `add`, `change`, and `delete` operations to the generic TEI P5 definition, and outputs the customized schema file in your chosen language.
5.  **Validate your TEI documents:** Configure your XML editor (e.g., Oxygen XML Editor, VS Code with XML extensions) to validate your TEI XML files against this newly generated project-specific schema. This is the crucial step where your encoding rules are enforced.

A common mistake is to forget to re-generate the schema after making changes to the ODD. Your XML editor will continue to validate against the *old* schema until you replace it with the newly generated one. Another pitfall is trying to manually edit the generated schema files. **Never manually edit a generated schema!** All changes *must* be made in the ODD, and then the schema regenerated. This ensures that your ODD remains the single source of truth and that all generated schema formats are consistent. By mastering this generation process, you empower your project with robust, custom validation, ensuring the integrity and consistency of your encoded data.

#### Key concepts
*   **Schema Generation:** The automated process of transforming an ODD document into a machine-readable schema file (e.g., RNG, DTD, XSD) that can be used for XML validation.
*   **RELAX NG (RNG):** An XML schema language known for its expressiveness, simplicity, and ease of use, often preferred in the TEI community.
*   **Document Type Definition (DTD):** The oldest XML schema language, universally supported but with limited expressiveness and data typing capabilities.
*   **W3C XML Schema (XSD):** A powerful and verbose XML schema language with strong data typing and extensive features, widely used in enterprise XML environments.
*   **Roma:** A web-based service provided by the TEI Consortium for generating TEI schemas from ODD files.
*   **`teitooled`:** A Python library offering command-line tools for working with TEI ODDs, including schema generation.
*   **Validation:** The process of checking an XML document against a schema to ensure it conforms to the defined structural and content rules.

#### Hands-on activity
**Generating a Schema with Roma**
This activity requires internet access.

1.  Go to the Roma website: `https://roma.tei-c.org/`
2.  Click on "Start a new customization".
3.  Upload your ODD file (you can use one you've developed in previous activities, or a simple one like the `<legalRef>` example).
4.  On the "Customize" page, navigate to the "Schema" tab.
5.  Select "RELAX NG" as the schema language.
6.  Click "Generate Schema".
7.  Download the generated `.rng` file.
8.  (Optional, if you have an XML editor like Oxygen XML Editor): Open your ODD XML file in your editor. Try to validate it against the *generated* `.rng` file. Observe if any errors appear if your ODD contained specific constraints. Then, create a simple TEI XML file that uses your custom elements/attributes and validate it against the generated `.rng`.

#### Assessment idea
1.  **Question:** Your project team is using an older XML editor that has excellent support for DTDs but struggles with modern schema languages. You have developed a comprehensive ODD. Which schema language would you choose to generate from your ODD, and what are the key limitations you should be aware of with this choice?
    *   **Model Response:** Given the constraint of an older XML editor with strong DTD support, I would choose to generate a **DTD** from the ODD. The key limitations to be aware of are:
        *   **Limited Expressiveness:** DTDs cannot express complex content models as precisely as RELAX NG or XML Schema. For instance, they struggle with "A OR B followed by C" or "zero or one of X."
        *   **No Strong Data Typing:** DTDs cannot enforce data types like integers, dates, or specific patterns for attribute values (beyond simple enumerations). All attribute values are essentially treated as text.
        *   **Poor Mixed Content Handling:** DTDs have difficulty with elements that can contain both text and other elements in an interleaved fashion.
        *   **No Namespace Support:** DTDs do not natively understand or validate XML namespaces, which can be an issue if your TEI documents integrate elements from other XML vocabularies.
        These limitations mean that some of the fine-grained constraints defined in the ODD (especially complex content models or specific data types for attributes) might not be fully or accurately translated into the generated DTD, leading to less rigorous validation.

2.  **Question:** Explain why it is a critical best practice to *never* manually edit a schema file (e.g., an `.rng` or `.xsd` file) that has been generated from an ODD.
    *   **Model Response:** It is a critical best practice to never manually edit a schema file generated from an ODD because the ODD is intended to be the **single source of truth** for your project's schema definition. If you manually modify the generated schema:
        *   **Inconsistency:** Your schema will no longer accurately reflect the rules defined in your ODD. If you later regenerate the schema from the ODD (e.g., after making further changes to the ODD), your manual edits will be overwritten and lost.
        *   **Maintenance Nightmare:** Maintaining two separate sources of truth (the ODD and the manually edited schema) is extremely difficult and error-prone, especially in collaborative projects.
        *   **Loss of Documentation:** The ODD contains rich documentation (`<gloss>`, `<desc>`) that is used to generate human-readable schema documentation. Manual changes to the schema bypass this documentation system.
        *   **Interoperability Issues:** If you need to generate schemas in different formats (e.g., both RNG and XSD), manual edits to one format will not be reflected in the other, leading to incompatible validation rules across different tools or users.
        All modifications to your project's encoding rules should always be made within the ODD, and then a new schema should be generated.

#### AI generation note
Create a 12-minute screencast tutorial. The video starts with an ODD file open in an XML editor. The instructor then navigates to `roma.tei-c.org`, uploads the ODD, and demonstrates generating RELAX NG, DTD, and XML Schema files. For each generated schema, briefly show a snippet of its code, highlighting how different ODD constructs (e.g., `<elementSpec>`, `<attDef>`) translate into the respective schema language. Then, demonstrate how to configure Oxygen XML Editor (or a similar tool) to validate a sample TEI XML document against the newly generated RELAX NG schema, showing both successful validation and an error when a rule is violated. Include a discussion of when to choose each schema type. Provide downloadable ODD and sample TEI XML files. Ensure high-contrast visuals for code and clear audio.

### Chapter 6.7 — Project-Specific ODD Development: Case Studies and Best Practices

#### Learning objectives
*   Analyze real-world examples of project-specific ODDs and their underlying scholarly motivations.
*   Identify key best practices for collaborative ODD development and maintenance.
*   Understand strategies for managing complexity and version control in ODD projects.
*   Reflect on the iterative nature of ODD development in the context of digital scholarly editing.

#### Detailed lesson content
Having explored the technical mechanics of ODD, it's time to situate this knowledge within the broader landscape of digital scholarly editing. ODD development is rarely a solitary, one-time task; it's an iterative, collaborative process deeply intertwined with the evolving research questions and practical needs of a project. Understanding best practices and learning from real-world case studies can significantly enhance your ODD development workflow.

**Case Study: The Women Writers Project (WWP)**
The Women Writers Project (WWP) at Northeastern University is a pioneering digital humanities project that has been encoding texts by early modern women writers since the 1980s. Their TEI encoding practices predate ODD, but they have since developed a sophisticated ODD to manage their extensive schema customizations. The WWP ODD is a prime example of tailoring TEI to a specific corpus and research agenda. For instance, they have specific needs for encoding textual features related to manuscript studies, such as different types of hands, scribal interventions, and material features of the page. They also have a strong emphasis on encoding named entities (persons, places, organizations) with rich metadata to support prosopographical research. Their ODD defines specific attributes for these entities, often with controlled vocabularies, and custom elements for features not adequately covered by generic TEI. This allows them to maintain a highly consistent and queryable corpus that directly supports their research on women's literary history. Their ODD is complex, reflecting decades of scholarly refinement, and serves as a testament to the power of ODD for long-term, large-scale projects.

**Case Study: The Digital Mappa Project**
The Digital Mappa Project (DMP) focuses on encoding medieval maps and geographical texts. Their ODD is designed to handle the unique challenges of representing spatial information, historical geography, and the complex interplay between text and image in medieval cartography. They might define custom elements for specific types of geographical features (e.g., `<river>`, `<mountainRange>`) with attributes for historical names, modern equivalents, and associated uncertainties. They also likely customize existing TEI elements like `<placeName>` to include attributes for coordinates or links to gazetteers. Their ODD is driven by the need to integrate textual and spatial data, allowing researchers to analyze how medieval authors conceptualized and described their world. This project highlights how ODD can be used to bridge disciplinary gaps and create schemas that support multi-modal research.

**Best Practices for Project-Specific ODD Development:**

1.  **Start with the Generic TEI P5 and Customize Incrementally:** Don't try to reinvent the wheel. Begin by understanding the relevant parts of the generic TEI P5. Only customize when the generic elements/attributes are genuinely insufficient or overly permissive for your research questions. Add customizations incrementally as specific needs arise during encoding.
2.  **Document Everything Thoroughly:** As discussed in Chapter 6.5, clear `<gloss>` and `<desc>` elements are non-negotiable. Document not only *what* you've defined, but *why*. This is crucial for onboarding new team members, ensuring long-term maintainability, and making your schema understandable to external users.
3.  **Prioritize Consistency:** Use attribute classes (`<attClass>`) to apply common attributes across multiple elements. Use closed `<valList>` for attributes whenever possible to enforce controlled vocabularies. This minimizes encoding errors and makes your data more consistent and queryable.
4.  **Iterative Development and Feedback Loops:** ODD development is rarely a "set it and forget it" process. As you encode, you'll discover new textual phenomena or refine your research questions. Establish a feedback loop where encoders regularly report challenges or suggest improvements to the ODD. Be prepared to revise your ODD, regenerate your schema, and update your documentation.
5.  **Version Control:** Treat your ODD file(s) like any other critical project asset. Use a version control system (like Git) to track changes, collaborate with others, and revert to previous versions if necessary. This is especially important in collaborative projects.
6.  **Modularity:** For very large and complex projects, consider breaking your ODD into smaller, modular files that can be combined. The TEI provides mechanisms for this, allowing you to manage specific sets of customizations (e.g., a "names module," a "textual criticism module") separately.
7.  **Test and Validate Regularly:** After every significant change to your ODD, regenerate your schema and validate a representative sample of your encoded documents against it. This helps catch errors early and ensures your ODD is producing a valid and effective schema.
8.  **Community Engagement:** Don't hesitate to consult the TEI mailing lists or forums if you encounter complex ODD challenges. The TEI community is highly supportive and experienced.

The iterative nature of ODD development mirrors the scholarly process itself. Just as research questions evolve and interpretations deepen, so too might your encoding schema. The ODD provides the flexibility and rigor to adapt your digital edition to these evolving insights, ensuring that your encoding remains a precise and powerful instrument for scholarly inquiry. By adhering to these best practices, you can build robust, sustainable, and impactful digital humanities projects that leverage the full power of TEI customization.

#### Key concepts
*   **Iterative Development:** A cyclical process of designing, implementing, testing, and refining an ODD and its generated schema, driven by ongoing encoding experience and evolving research questions.
*   **Version Control:** The practice of managing changes to ODD files (and other project assets) over time, typically using systems like Git, to track revisions, facilitate collaboration, and enable rollback.
*   **Modularity:** The practice of breaking down a large ODD into smaller, interconnected ODD files, each focusing on a specific set of customizations, to improve manageability.
*   **Scholarly Motivation:** The specific research questions, theoretical frameworks, and disciplinary needs that drive the customization of a TEI schema.
*   **Sustainability:** The ability of a project's ODD and schema to be maintained, understood, and used effectively over a long period, often across different teams and technologies.

#### Hands-on activity
**Critiquing a Hypothetical ODD Decision**
You are a lead editor on a project encoding a corpus of 16th-century legal depositions. The team initially decided to use the generic TEI `<persName>` element for all individuals mentioned, with `@role` to distinguish between "deponent," "witness," and "accused." However, after six months of encoding, the team reports that:
1.  It's difficult to consistently apply `@role` values, leading to variations like `role="deponent"` vs. `role="Deponent"`.
2.  Querying for specific roles is cumbersome because of these inconsistencies.
3.  The project now wants to add specific attributes only relevant to "deponents" (e.g., `@age`, `@occupationAtTimeOfDeposition`).

**Your Task:**
1.  As the lead editor, propose a change to the ODD using `<elementSpec>` that addresses these issues. Would you introduce new elements, or modify existing ones? Justify your decision based on best practices discussed in this chapter.
2.  Describe how this ODD change would improve data consistency, queryability, and maintainability for the project.

#### Assessment idea
1.  **Question:** A collaborative digital edition project is developing a complex ODD with many custom elements and attributes. The project leader insists that all changes to the ODD should be discussed and approved in weekly meetings, and then a single designated person should commit the changes to a central repository. Explain why this approach, while seemingly cautious, might hinder the iterative nature of ODD development and suggest how version control (like Git) can be leveraged to support a more agile workflow without sacrificing control.
    *   **Model Response:** While the project leader's caution is understandable for maintaining quality, the proposed approach of weekly meetings and a single committer can significantly hinder the **iterative nature of ODD development**.
        *   **Hindrances:** It creates a bottleneck, slowing down the process of identifying, proposing, and implementing necessary schema adjustments. Encoders might delay reporting issues or experimenting with solutions, leading to frustration and less efficient encoding. The "single committer" model also centralizes risk and can lead to delays if that person is unavailable.
        *   **Leveraging Version Control (Git):** A more agile workflow can be achieved by leveraging Git's branching and merging capabilities:
            1.  **Feature Branches:** Each encoder or small team can work on a separate "feature branch" of the ODD for specific customizations or fixes. This allows parallel development without interfering with the main (e.g., `main` or `develop`) branch.
            2.  **Pull Requests/Merge Requests:** When a set of changes is ready, the encoder creates a pull request (PR) to merge their feature branch into the main ODD branch.
            3.  **Code Review:** The PR triggers a code review process. Other team members (including the project leader) can review the ODD changes, provide feedback, and discuss implications *asynchronously* or in focused, smaller meetings, rather than waiting for a large weekly meeting.
            4.  **Automated Testing:** Continuous Integration (CI) tools can be set up to automatically generate schemas from the ODD in the PR and validate sample TEI documents, providing immediate feedback on the impact of changes.
            This approach provides both **agility** (developers can work in parallel and iterate quickly) and **control** (changes are reviewed, tested, and approved before merging into the main schema), fostering a more efficient and collaborative ODD development environment.

2.  **Question:** Describe a scenario where breaking a large ODD into smaller, modular ODD files would be beneficial. What are the advantages of this modular approach?
    *   **Model Response:** A scenario where breaking a large ODD into smaller, modular ODD files would be beneficial is a **very large, long-term digital edition project with multiple sub-teams, each focusing on different aspects of the text or different textual features**. For example, a project encoding a multi-volume historical correspondence might have:
        *   One team focusing on **named entities** (persons, places, organizations).
        *   Another team specializing in **textual criticism** (variants, apparatus).
        *   A third team handling **linguistic annotation** (POS tagging, dependency parsing).
        *   A core team managing **overall document structure** (chapters, paragraphs).
        The **advantages** of this modular approach are:
        *   **Improved Manageability:** Each sub-team can manage and iterate on their specific ODD module without constantly conflicting with changes from other teams in a single, monolithic ODD.
        *   **Enhanced Collaboration:** It allows for clearer division of labor and expertise. Experts in textual criticism can focus on their module, while linguistic experts focus on theirs.
        *   **Reusability:** Specific modules (e.g., a "named entities" module) might be reusable across different projects or within different parts of the same project.
        *   **Reduced Complexity:** A large ODD can be overwhelming. Breaking it down makes it easier to navigate, understand, and debug specific sections.
        *   **Faster Processing:** While the overall schema generation still combines all modules, working with smaller files during development can be quicker.
        The individual modules can then be combined into a single, comprehensive ODD for final schema generation using ODD's own inclusion mechanisms (e.g., `<schemaSpecRef>`).

#### AI generation note
Create a 15-minute documentary-style video featuring interviews with digital humanities scholars (or simulated interviews with animated avatars) discussing their experiences with ODD development on real projects like the WWP or Digital Mappa. Interweave these "interviews" with screen recordings showing snippets of their actual ODD files, highlighting specific customizations (e.g., a custom element for a specific textual feature, a complex attribute class). Focus on the *why* behind their design choices and the iterative nature of their work. Include a segment demonstrating a simplified Git workflow for ODD files (branching, committing, merging). End with a discussion prompt about balancing scholarly rigor with practical implementation. Ensure high-quality archival footage (if applicable to the simulated projects) and clear, professional audio.

---

## Module 7: TEI for Specific Document Types and Advanced Markup

### Chapter 7.1 — Encoding Manuscripts and Archival Materials

#### Learning objectives
*   Identify the unique challenges and opportunities in encoding manuscript and archival materials using TEI.
*   Apply TEI elements to describe the physical characteristics of a manuscript, including its structure, material, and condition.
*   Differentiate between diplomatic and critical transcription approaches and encode textual features specific to manuscripts, such as hands, deletions, additions, and unclear readings.
*   Understand and utilize elements like `<handNote>`, `<material>`, `<physDesc>`, and `<supplied>` to capture granular details of manuscript evidence.

#### Detailed lesson content
Encoding manuscripts and archival materials presents a distinct set of challenges compared to printed texts. Unlike the relative stability of a published edition, manuscripts are unique physical artifacts, often bearing the marks of their creation, use, and passage through time. These physical characteristics—the type of parchment or paper, the binding, the presence of marginalia, the changes in ink or hand, damage, or fading—are not mere accidents but crucial evidence for scholarly interpretation. A robust TEI encoding must capture not only the text itself but also these paratextual and physical features, transforming them from ephemeral observations into structured, searchable data. The goal is to create a digital surrogate that allows researchers to analyze the text in its material context, much like they would a physical artifact.

One of the primary considerations when approaching manuscript encoding is the choice between a diplomatic and a critical transcription. A **diplomatic transcription** aims to reproduce the text as faithfully as possible, preserving original spelling, punctuation, line breaks, and even visual layout, often including deletions, insertions, and other scribal interventions. In TEI, this might involve extensive use of elements like `<lb/>` for line breaks, `<c>` for individual characters, and `<gap>` for missing text. Conversely, a **critical transcription** typically normalizes the text, correcting obvious errors, regularizing spelling, and presenting a reading text that prioritizes readability and a reconstructed authorial intention, often drawing on multiple manuscript witnesses. For manuscripts, however, even a critical edition will often include an apparatus criticus to note significant variants or physical features. The power of TEI lies in its ability to support both approaches, or even a hybrid, allowing encoders to capture the raw diplomatic evidence while also providing a normalized reading.

To capture the physical description of a manuscript, TEI offers a rich set of elements within the `<physDesc>` (physical description) element, which lives inside the `<msDesc>` (manuscript description) element within the `<teiHeader>`. Here, you can describe the `<objectDesc>` (object description), including the `<supportDesc>` (support description) for the material (e.g., `<material>parchment</material>` or `<material>paper</material>`), the `<extent>` (size and number of leaves/pages), and the `<layoutDesc>` (layout description) for details like the number of columns or lines per page. The `<decoDesc>` (decoration description) can document illuminations, initials, or rubrication. For the human element, the `<handDesc>` (hand description) is crucial. Within `<handDesc>`, you use `<handNote>` elements to describe individual scribal hands, their characteristics, and their specific contributions to the text. For instance, you might have `<handNote xml:id="handA" script="latin" scope="major">Main scribe, formal gothic bookhand.</handNote>` and then link specific textual passages to this hand using the `@hand` attribute on elements like `<p>` or `<l>`.

```xml
<msDesc xml:id="MS_Ex_001">
  <msIdentifier>
    <settlement>Oxford</settlement>
    <repository>Bodleian Library</repository>
    <idno>MS. Bodl. 123</idno>
  </msIdentifier>
  <physDesc>
    <objectDesc>
      <supportDesc>
        <support>Parchment</support>
        <extent>
          <measure unit="leaves" quantity="150">150 leaves</measure>
          <dimensions unit="mm">
            <height>250</height>
            <width>180</width>
          </dimensions>
        </extent>
      </supportDesc>
      <layoutDesc>
        <layout columns="2" writtenLines="30">Two columns, 30 lines per page.</layout>
      </layoutDesc>
    </objectDesc>
    <handDesc>
      <handNote xml:id="handA" script="latin" scope="major">Main scribe, 13th century, formal bookhand.</handNote>
      <handNote xml:id="handB" script="latin" scope="minor">Later annotator, 15th century, informal cursive.</handNote>
    </handDesc>
    <decoDesc>
      <decoNote>Initial capitals in red and blue, some with flourishing.</decoNote>
    </decoDesc>
    <condition>
      <p>Some water damage to lower margins of folios 1-10. Fading ink on folio 50r.</p>
    </condition>
  </physDesc>
  <msContents>...</msContents>
</msDesc>
```

Within the text itself, handling changes, damage, or editorial interventions requires a careful approach. For text that has been added by a different hand or at a later stage, the `<add>` element is used, often with an `@place` attribute (e.g., `place="margin"`, `place="inline"`) and an `@hand` attribute to specify the scribe. Conversely, `<del>` marks deleted text, again with attributes for `type` (e.g., `type="strikethrough"`, `type="erasure"`) and `hand`. If text is illegible or missing due to damage, the `<gap>` element is employed, often with a `@reason` attribute (e.g., `reason="damage"`, `reason="illegible"`) and a `@quantity` and `@unit` to estimate the missing length. When an editor supplies missing or illegible text, the `<supplied>` element is used, indicating the editorial intervention. For example, if a word is partially obscured but can be confidently reconstructed, you might encode it as `<supplied reason="damage" evidence="context">reconstruct<unclear>ed</unclear></supplied>`. For text that is simply unclear but not necessarily missing, the `<unclear>` element is used. These elements allow for a nuanced representation of the textual artifact, distinguishing between what is physically present, what is inferred, and what is lost. The common mistake here is to conflate editorial intervention with physical reality; always strive to use the most precise element to describe the *state* of the text on the manuscript, not just its interpretation. For instance, if a word is crossed out, it's a `<del>`, not just an omission. If it's missing due to a tear, it's a `<gap>`, not a deletion. Understanding these distinctions is paramount for accurate scholarly encoding.

#### Key concepts
*   **Diplomatic Transcription:** A transcription that aims to reproduce the text as faithfully as possible to the source, preserving original spelling, punctuation, and layout.
*   **Critical Transcription:** A transcription that normalizes the text, corrects errors, and presents a reading text, often drawing on multiple sources.
*   **`<msDesc>`:** (Manuscript Description) A top-level element within the `<teiHeader>` used to provide a comprehensive description of a manuscript.
*   **`<physDesc>`:** (Physical Description) An element within `<msDesc>` used to describe the physical characteristics of the manuscript, such as material, size, and layout.
*   **`<handDesc>`:** (Hand Description) An element within `<physDesc>` used to describe the different scribal hands present in a manuscript.
*   **`<handNote>`:** An element within `<handDesc>` used to provide details about a specific hand, including its characteristics and scope.
*   **`<add>`:** Marks text added by a scribe, often later or in a different hand.
*   **`<del>`:** Marks text deleted by a scribe, e.g., through strikethrough or erasure.
*   **`<gap>`:** Marks a point where text is missing or illegible in the source, often due to damage.
*   **`<supplied>`:** Marks text supplied by an editor where the original is missing or illegible.
*   **`<unclear>`:** Marks text that is difficult or impossible to read with certainty.

#### Hands-on activity
**Transcribing a Manuscript Fragment with TEI**

Imagine you are working with a fragment of an early modern letter. The text reads:

"My Deareſt Friend,
I hope this letter finds you well. I was much <del type="strikethrough">disappointed</del> <add place="above">pleased</add> to hear of your safe arrival. The news from court is <unclear>disturbing</unclear>, and I fear for the future.
Yours in haste,
<gap reason="damage" quantity="5" unit="chars"/>ry"

Your task is to encode this fragment using the appropriate TEI elements for manuscript features. Assume "My Deareſt Friend," and the main body are in `handA`, and the *Question:** You are encoding a medieval manuscript where a scribe has crossed out a word and written a *Model Response:**
    To represent these interventions, you would use `<del>` for the crossed-out word, `<add>` for the *Question:** Explain the scholarly rationale behind using `<gap>` versus `<unclear>` versus `<supplied>` in TEI encoding of manuscripts. When would you choose one over the others, and what interpretive pitfalls might arise from misusing these elements?

    **Model Response:**
    *   **`<gap>`** is used when text is entirely missing or completely illegible in the source, typically due to physical damage, loss of material, or severe fading. It signifies that the text *cannot* be read.
    *   **`<unclear>`** is used when text is present but difficult to read with certainty. The editor can discern some letters or shapes but is not confident in the full reading. It signifies that the text *might* be read, but with doubt.
    *   **`<supplied>`** is used when an editor provides text that is missing or illegible in the source, based on external evidence (like a parallel text) or strong contextual inference. It signifies editorial intervention to complete the text.

    **Choice Rationale:**
    *   Choose `<gap>` if a section of text is literally gone (e.g., a torn page, a hole) or so faded/damaged it's impossible to make out any characters.
    *   Choose `<unclear>` if you can see some traces of letters but cannot definitively transcribe them (e.g., a smudge, very faint ink).
    *   Choose `<supplied>` when you, as an editor, are inserting text that isn't physically present or legible, but you believe it should be there.

    **Interpretive Pitfalls:**
    Misusing these elements can lead to significant interpretive errors. Forgetting to use `<supplied>` and simply inserting text without markup can mislead readers into believing the text is physically present in the manuscript. Conversely, using `<gap>` when text is merely unclear can obscure valuable, albeit uncertain, evidence. Overusing `<unclear>` when a reading is actually confident but challenging can create an impression of greater textual instability than exists. The core pitfall is blurring the line between the physical evidence of the manuscript and the editor's interpretation or reconstruction. Accurate encoding demands a clear distinction between what is *there*, what is *possibly there*, and what is *editorially added*.

#### AI generation note
Create a 15-minute interactive video lecture. Begin with a high-resolution scan of a medieval manuscript page (e.g., a page from the Lindisfarne Gospels or a similar richly annotated text). Use a split-screen approach: the left side displays the manuscript image, and the right side shows the corresponding TEI XML code. As the instructor's voiceover explains diplomatic vs. critical transcription, highlight specific features on the manuscript (e.g., a deletion, an interlinear addition, a marginal note, a faded passage) and simultaneously highlight the corresponding TEI elements (`<del>`, `<add>`, `<gap>`, `<unclear>`) in the XML view. Include animated overlays to point out `handNote` attributes and their connection to different scribal hands. Conclude with a 5-minute interactive exercise where learners are presented with a new manuscript image fragment containing a few scribal interventions and asked to select the correct TEI element from a dropdown menu for each intervention. Provide immediate feedback and a model XML solution. Ensure full captions and a downloadable PDF of the example manuscript and its TEI encoding.

---

### Chapter 7.2 — Encoding Correspondence and Personal Papers

#### Learning objectives
*   Identify the common structural and content features unique to correspondence and personal papers (letters, diaries, memoranda).
*   Apply TEI elements such as `<opener>`, `<closer>`, `<dateline>`, `<address>`, `<salute>`, and `<signed>` to accurately mark up the formal components of a letter.
*   Utilize elements like `<correspAction>`, `<correspDesc>`, and `<persName>` to describe the participants and context of correspondence within the `<teiHeader>`.
*   Address practical encoding challenges, such as handling enclosures, postscripts, and multiple writers or recipients in personal documents.

#### Detailed lesson content
Correspondence and personal papers, encompassing letters, diaries, memoranda, and other informal writings, offer invaluable insights into historical periods, individual lives, and social dynamics. However, their often less formal structure, combined with unique elements like addresses, dates, salutations, and signatures, requires specific TEI strategies to ensure these crucial pieces of information are not only preserved but also made discoverable and analyzable. Unlike published works, personal papers often reflect a fluid, evolving state of composition, with annotations, interjections, and non-standard formatting that demand careful attention. The goal of encoding these documents is to transform their often idiosyncratic layout into a standardized, machine-readable format that facilitates research into social networks, biographical details, and communication patterns.

The primary structural elements of a letter are typically found at its beginning and end. The `<opener>` element groups together components that precede the main body of the letter, such as the `<dateline>` (date and place of writing), `<address>` (recipient's address), and `<salute>` (the opening greeting, e.g., "My Dearest Friend"). Conversely, the `<closer>` element groups together components that follow the main body, including the closing `<salute>` (e.g., "Yours sincerely"), the `<signed>` element (the sender's signature), and potentially an `<addressee>` element if the recipient is named again. These elements provide a clear, semantic structure to the letter, allowing for automated extraction of key metadata. For instance, extracting all datelines allows for chronological ordering, while extracting salutations can reveal social hierarchies or relationships.

```xml
<text>
  <body>
    <div type="letter">
      <opener>
        <dateline>London, <date when="1813-01-28">January 28, 1813</date></dateline>
        <salute>My Dearest Cassandra,</salute>
      </opener>
      <p>I am so glad to hear of your safe arrival at Bath...</p>
      <closer>
        <salute>Yours ever affectionately,</salute>
        <signed>Jane Austen</signed>
      </closer>
      <postscript>
        <p>P.S. Remember to send my regards to Mrs. Smith.</p>
      </postscript>
    </div>
  </body>
</text>
```

Beyond the structural elements within the `<body>` of the letter, the `<teiHeader>` plays a vital role in contextualizing the correspondence. Within the `<profileDesc>` (profile description), the `<correspDesc>` (correspondence description) element is specifically designed for this purpose. It allows you to describe the participants in the exchange using `<correspAction>` elements. Each `<correspAction>` can specify the `type` of action (e.g., "sent", "received", "written"), the `<persName>` (person's name) of the participant, and the `<placeName>` (place name) associated with the action. This enables the creation of a rich dataset about who wrote to whom, from where, and when. For example:

```xml
<profileDesc>
  <correspDesc>
    <correspAction type="sent">
      <persName ref="#JAusten">Jane Austen</persName>
      <placeName ref="#London">London</placeName>
      <date when="1813-01-28"/>
    </correspAction>
    <correspAction type="received">
      <persName ref="#CAusten">Cassandra Austen</persName>
      <placeName ref="#Bath">Bath</placeName>
      <date when="1813-01-29"/> <!-- Estimated reception date -->
    </correspAction>
  </correspDesc>
</profileDesc>
```
(Note: The `ref` attributes link to `<person>` and `<place>` elements defined elsewhere in the `<teiHeader>` or in an external authority file, providing disambiguation and rich metadata.)

A common challenge in encoding correspondence is handling **enclosures** and **postscripts**. Enclosures, such as separate documents mentioned within the letter, can be referenced using `<ptr>` or `<ref>` elements, or if the enclosure is part of the same TEI document, it might be marked as a separate `<div>` with a `type="enclosure"`. Postscripts, often introduced by "P.S.", are typically marked with the `<postscript>` element, which can contain a `<p>` or other block-level elements. Another pitfall arises when a letter has **multiple writers** or **recipients**. For multiple writers, you might use multiple `<signed>` elements, or if the hands change within the body, the `@hand` attribute (as discussed in Chapter 7.1) becomes essential. For multiple recipients, the `<address>` or `<correspAction type="received">` elements can be repeated, or a `<listPerson>` can be used to enumerate them. The key is to be consistent and to use the `@who` attribute on elements like `<salute>` or `<signed>` to explicitly link them to specific individuals defined in the `<person>` list.

Diaries and other personal papers often present their own unique challenges, particularly regarding their chronological structure and the varied nature of their entries. A diary might be encoded as a series of `<div>` elements, each representing a day's entry, with a `type="diaryEntry"` and a `@when` attribute for the date. Within these entries, the content can be highly varied, from simple observations to detailed narratives, requiring a flexible approach to paragraphing, lists, and embedded quotations. The common mistake here is to treat these documents as monolithic texts rather than as structured collections of discrete entries, each with its own context and metadata. Always consider the smallest meaningful unit of information (e.g., a single letter, a single diary entry) and ensure its metadata is captured accurately, both within the `<body>` and the `<teiHeader>`, to maximize its research potential.

#### Key concepts
*   **`<opener>`:** A TEI element grouping the opening components of a letter (dateline, address, salutation).
*   **`<closer>`:** A TEI element grouping the closing components of a letter (salutation, signature).
*   **`<dateline>`:** Specifies the date and/or place a letter was written.
*   **`<address>`:** Contains the address of the recipient.
*   **`<salute>`:** Marks a salutation, either at the opening or closing of a letter.
*   **`<signed>`:** Marks the signature of the sender.
*   **`<postscript>`:** Contains text added after the main body and signature of a letter.
*   **`<correspDesc>`:** (Correspondence Description) An element within `<profileDesc>` in the `<teiHeader>` used to describe the participants and context of a piece of correspondence.
*   **`<correspAction>`:** An element within `<correspDesc>` describing a specific action related to the correspondence (e.g., sent, received).
*   **Enclosures:** Separate documents or items mentioned within or sent alongside a letter.

#### Hands-on activity
**Encoding a Historical Letter Fragment**

Consider the following excerpt from a fictional historical letter:

"My dear Mr. Smith,
I received your kind letter of the 10th inst. The weather here has been quite dreadful. I hope to visit soon.
Yours most sincerely,
A. B. Johnson

P.S. I have enclosed the document you requested."

Your task is to encode this fragment using the appropriate TEI elements for correspondence. Pay attention to the opener, closer, and postscript. Assume the letter was sent from "Bristol" on "March 15, 1885".

```xml
<text>
  <body>
    <div type="letter">
      <opener>
        <dateline>Bristol, <date when="1885-03-15">March 15, 1885</date></dateline>
        <salute>My dear Mr. Smith,</salute>
      </opener>
      <p>I received your kind letter of the 10th inst. The weather here has been quite dreadful. I hope to visit soon.</p>
      <closer>
        <salute>Yours most sincerely,</salute>
        <signed>A. B. Johnson</signed>
      </closer>
      <postscript>
        <p>P.S. I have enclosed the document you requested.</p>
      </postscript>
    </div>
  </body>
</text>
```
(Note: A full TEI document would also include a `<teiHeader>` with a `<fileDesc>`, `<profileDesc>` containing `<correspDesc>`, and possibly `<person>` elements for Mr. Smith and A. B. Johnson.)

#### Assessment idea
1.  **Question:** You are encoding a collection of letters between two historical figures. You want to be able to easily query who wrote to whom, from where, and on what date. Which TEI elements, both within the `<body>` and the `<teiHeader>`, would you primarily use to capture this information, and how would they relate? Provide a brief example for a letter sent by "Mary" from "Paris" to "John" in "London" on "1792-05-20".

    **Model Response:**
    To capture this information, you would use `<dateline>` within the `<body>` to mark the date and place of writing, and `<signed>` for the sender. More comprehensively, within the `<teiHeader>`, you would use `<correspDesc>` containing `<correspAction>` elements.

    **Example:**
    Within the `<body>`:
    ```xml
    <opener>
      <dateline>Paris, <date when="1792-05-20">May 20, 1792</date></dateline>
      <salute>My Dearest John,</salute>
    </opener>
    <p>...</p>
    <closer>
      <salute>Yours,</salute>
      <signed>Mary</signed>
    </closer>
    ```
    Within the `<teiHeader>`:
    ```xml
    <profileDesc>
      <correspDesc>
        <correspAction type="sent">
          <persName ref="#Mary">Mary</persName>
          <placeName ref="#Paris">Paris</placeName>
          <date when="1792-05-20"/>
        </correspAction>
        <correspAction type="received">
          <persName ref="#John">John</persName>
          <placeName ref="#London">London</placeName>
          <date when="1792-05-20"/> <!-- Or estimated reception date -->
        </correspAction>
      </correspDesc>
    </profileDesc>
    ```
    These elements relate by providing both inline textual markup (`<dateline>`, `<signed>`) and structured metadata (`<correspAction>`) that can be linked via `xml:id` and `ref` attributes to a central list of persons and places.

2.  **Question:** A common pitfall in encoding personal papers is failing to differentiate between the original content of a letter and later annotations or postscripts. Discuss how TEI helps manage this distinction and what specific elements you would use for a postscript and a marginal annotation added by a *different* hand.

    **Model Response:**
    TEI helps manage this distinction by providing specific elements for different types of textual additions and by allowing the attribution of hands.
    For a **postscript**, the `<postscript>` element is explicitly designed to contain text appended after the main body and signature of a letter. It clearly delineates this section as distinct from the primary message.
    For a **marginal annotation added by a different hand**, you would use the `<add>` element, specifying its `place` attribute as "margin" (e.g., `<add place="margin">`). Crucially, to indicate it was added by a *different* hand, you would use the `@hand` attribute, linking to a `<handNote>` defined in the `<teiHeader>` (e.g., `<add place="margin" hand="#annotatorHand">`). This combination clearly marks the text as an addition, specifies its location, and attributes it to a distinct agent, preventing the conflation of original content with later interventions.

#### AI generation note
Create a 12-minute video lecture focusing on the structure of a historical letter. Start with a visual of a digitized 18th-century letter (e.g., from the British Library's collection of King George III's correspondence). Use animated overlays to highlight the `<opener>`, `<dateline>`, `<salute>`, `<closer>`, `<signed>`, and `<postscript>` sections on the letter image. Transition to a split-screen view showing the letter image and the corresponding TEI XML, demonstrating how each highlighted section maps to its TEI element. Emphasize the importance of the `<correspDesc>` in the `<teiHeader>` by showing how to populate `<correspAction>` elements with `persName` and `placeName` data, using a simple network graph animation to illustrate sender-recipient relationships. Include a 3-question interactive quiz where learners identify the correct TEI element for different parts of a letter. Provide full captions and a downloadable TEI XML template for a letter.

---

### Chapter 7.3 — Encoding Drama and Performance Texts

#### Learning objectives
*   Identify the fundamental structural components of a dramatic text, such as acts, scenes, characters, and stage directions.
*   Apply TEI elements like `<play>`, `<castList>`, `<castItem>`, `<speaker>`, `<stage>`, and `<sp>` to accurately mark up the dialogue and actions within a play.
*   Understand how to differentiate between various types of stage directions (e.g., entrance, exit, action, sound) and encode them appropriately.
*   Address the complexities of encoding character roles, multiple speakers, and non-standard dramatic structures.

#### Detailed lesson content
Dramatic texts, from ancient Greek tragedies to modern experimental plays, possess a highly specialized structure that sets them apart from prose or poetry. They are not merely narratives but blueprints for performance, characterized by dialogue, stage directions, and a clear division of roles. Encoding drama in TEI allows scholars to analyze not just the linguistic content but also the performative aspects: character interactions, stagecraft, and the flow of action. This structured representation facilitates computational analysis of character networks, speaking turns, thematic development across acts, and the evolution of stage practices. The goal is to create an encoding that respects both the literary and theatrical dimensions of the play.

The overarching container for a dramatic text in TEI is the `<play>` element. Within this, a play is typically divided into three main sections: `<front>`, `<body>`, and `<back>`. The `<front>` matter usually contains elements like the title page, dedications, and, most importantly for drama, the `<castList>`. The `<castList>` enumerates all the characters in the play, with each character represented by a `<castItem>`. A `<castItem>` can include the `<role>` of the character (e.g., "King Lear"), a `<roleDesc>` (a brief description of the role, e.g., "King of Britain"), and sometimes a `<person>` element linking to a more detailed personography. This structured cast list is invaluable for character analysis and for understanding the dramatis personae. The `<body>` of the play contains the actual dramatic action, typically divided into `<div type="act">` and further into `<div type="scene">`.

```xml
<play>
  <front>
    <docTitle>
      <titlePart type="main">The Tragedy of Hamlet, Prince of Denmark</titlePart>
    </docTitle>
    <castList>
      <head>Dramatis Personae</head>
      <castItem>
        <role xml:id="hamlet">Hamlet</role>
        <roleDesc>Son to the late, and nephew to the present King.</roleDesc>
      </castItem>
      <castItem>
        <role xml:id="claudius">Claudius</role>
        <roleDesc>King of Denmark.</roleDesc>
      </castItem>
      <!-- ... other characters ... -->
    </castList>
  </front>
  <body>
    <div type="act" n="1">
      <head>ACT I</head>
      <div type="scene" n="1">
        <head>SCENE I. Elsinore. A platform before the Castle.</head>
        <stage type="entrance">Enter BARNARDO and FRANCISCO, two Sentinels.</stage>
        <sp>
          <speaker>BARNARDO</speaker>
          <l>Who's there?</l>
        </sp>
        <!-- ... more dialogue ... -->
      </div>
    </div>
  </body>
</play>
```

Within the `<body>` of the play, the core elements for marking up dialogue and action are `<sp>` (speech), `<speaker>`, and `<stage>`. An `<sp>` element encapsulates a single speech by a character. Inside `<sp>`, the `<speaker>` element identifies who is speaking (e.g., `<speaker>HAMLET</speaker>`). The actual lines of dialogue then follow, often encoded as `<l>` (line) elements if it's verse, or `<p>` if it's prose. A common mistake is to put the character's name directly into the `<sp>` element instead of using the dedicated `<speaker>` element; always remember that `<speaker>` is for the character's name as it appears in the text, while `<sp>` is the container for the entire speech.

**Stage directions** are critical for understanding the performance aspect of a play. The `<stage>` element is used for all types of stage directions. It is highly recommended to use the `@type` attribute to categorize these directions for better analysis. Common types include:
*   `type="entrance"`: `<stage type="entrance">Enter HAMLET.</stage>`
*   `type="exit"`: `<stage type="exit">Exit HAMLET.</stage>`
*   `type="setting"`: `<stage type="setting">A desolate heath.</stage>`
*   `type="action"`: `<stage type="action">He stabs him.</stage>`
*   `type="delivery"`: `<stage type="delivery">Aside.</stage>` or `<stage type="delivery">Whispering.</stage>`
*   `type="sound"`: `<stage type="sound">Thunder and lightning.</stage>`

The flexibility of the `@type` attribute allows for granular analysis of how stage directions function within a play. For instance, one could query all entrance directions to map character appearances or analyze the frequency of sound effects.

Complexities arise with **multiple speakers** in a single speech unit (e.g., "All: Hail, King!"), which can be handled by listing multiple speakers within the `<speaker>` element, or by using the `@who` attribute on `<sp>` to link to multiple `<person>` IDs. Another challenge is **non-standard dramatic structures**, such as plays with embedded songs, choruses, or highly experimental layouts. For songs, the `<lg>` (line group) element can be used for stanzas, with `<l>` for individual lines, often nested within a `<stage type="song">`. Choruses might be marked as a specific `<sp>` with a `<speaker>` element indicating "Chorus" or "All." The key is to maintain consistency and to use the most semantically appropriate TEI elements, even if it requires some creative application of attributes. Always remember that TEI aims to describe the structure and content, not to interpret it, so be precise in distinguishing between character dialogue, explicit stage directions, and other textual features.

#### Key concepts
*   **`<play>`:** The root element for encoding a dramatic text.
*   **`<front>`:** Contains front matter of a play, such as title page, dedication, and cast list.
*   **`<castList>`:** A list of characters appearing in a play.
*   **`<castItem>`:** An individual entry in a cast list, describing a character.
*   **`<role>`:** The name of a character in a play.
*   **`<roleDesc>`:** A description of a character's role.
*   **`<sp>`:** (Speech) The container for a single speech by a character.
*   **`<speaker>`:** Identifies the character speaking within an `<sp>` element.
*   **`<stage>`:** Marks a stage direction, often with a `@type` attribute to specify its function (e.g., entrance, exit, action).
*   **`<l>`:** (Line) Used for individual lines of verse, common in poetic drama.
*   **`<div type="act">` / `<div type="scene">`:** Structural divisions for acts and scenes within a play.

#### Hands-on activity
**Encoding a Scene from Shakespeare**

Consider this short excerpt from Shakespeare's *Hamlet*:

```
SCENE II. A public place.

Enter HAMLET, reading on a book.

HAMLET
To be, or not to be: that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles,
And by opposing end them?

(He pauses, deep in thought.)

OPHELIA
Good my lord,
How does your honour for this many a day?
```

Your task is to encode this fragment using the appropriate TEI elements for drama. Pay attention to the scene heading, entrance, dialogue, verse lines, and the embedded stage direction.

```xml
<text>
  <body>
    <div type="act" n="3"> <!-- Assuming Act 3 for this famous soliloquy -->
      <div type="scene" n="1"> <!-- Assuming Scene 1 -->
        <head>SCENE II. A public place.</head>
        <stage type="entrance">Enter HAMLET, reading on a book.</stage>
        <sp>
          <speaker>HAMLET</speaker>
          <l>To be, or not to be: that is the question:</l>
          <l>Whether 'tis nobler in the mind to suffer</l>
          <l>The slings and arrows of outrageous fortune,</l>
          <l>Or to take arms against a sea of troubles,</l>
          <l>And by opposing end them?</l>
        </sp>
        <stage type="action">He pauses, deep in thought.</stage>
        <sp>
          <speaker>OPHELIA</speaker>
          <l>Good my lord,</l>
          <l>How does your honour for this many a day?</l>
        </sp>
      </div>
    </div>
  </body>
</text>
```
(Note: A full TEI document would include a `<teiHeader>` and the `<play>` wrapper.)

#### Assessment idea
1.  **Question:** You are encoding a play where a character, "Lady Macbeth," delivers a soliloquy, and later, a servant enters. How would you distinguish Lady Macbeth's speech from the servant's entrance using TEI, and what specific attributes would you use for the entrance? Provide a brief XML snippet.

    **Model Response:**
    Lady Macbeth's soliloquy would be enclosed in an `<sp>` element with a `<speaker>` element identifying her. The servant's entrance would be marked with a `<stage>` element, specifically using the `@type="entrance"` attribute.

    ```xml
    <sp>
      <speaker>LADY MACBETH</speaker>
      <l>Unsex me here, and fill me from the crown to the toe top-full</l>
      <l>Of direst cruelty!</l>
    </sp>
    <stage type="entrance">Enter a SERVANT.</stage>
    ```

2.  **Question:** Discuss the importance of the `<castList>` in TEI encoding of drama. What information should typically be included in a `<castItem>`, and what analytical benefits does a well-structured `<castList>` provide for researchers? What is a common mistake when populating this element?

    **Model Response:**
    The `<castList>` is crucial in TEI encoding of drama because it provides a structured, machine-readable inventory of all characters in the play. This is fundamental for understanding the dramatis personae and their roles.

    A `<castItem>` should typically include:
    *   The `<role>` element: The character's name as it appears in the play (e.g., "Hamlet", "Ghost").
    *   The `<roleDesc>` element: A brief description of the character's function or relationship (e.g., "Son to the late King", "Father of Ophelia").
    *   Optionally, an `xml:id` attribute on `<role>` or `<castItem>` to uniquely identify the character, and a `ref` attribute to link to a `<person>` element in the `<teiHeader>` for richer biographical data.

    **Analytical Benefits:**
    A well-structured `<castList>` provides significant benefits for researchers:
    *   **Character Network Analysis:** It allows for easy extraction of all characters, facilitating the creation of social networks based on their interactions.
    *   **Role Distribution:** Researchers can analyze the distribution of roles, identifying major and minor characters, and understanding casting requirements.
    *   **Metadata Integration:** By linking to `<person>` elements, researchers can integrate biographical data, historical context, and other external information about the characters or the historical figures they represent.
    *   **Consistency Checking:** It provides a controlled vocabulary for character names, ensuring consistency throughout the encoding.

    **Common Mistake:**
    A common mistake is to simply list character names without using the `<role>` and `<roleDesc>` elements, or to neglect the `xml:id` and `ref` attributes. This reduces the semantic richness and analytical potential of the cast list, turning it into a mere visual list rather than a structured dataset. Another pitfall is including stage directions or actions within the `<castItem>` rather than keeping it focused on the character's identity.

#### AI generation note
Create a 10-minute animated video that walks through a scene from Shakespeare's *A Midsummer Night's Dream*. Start with a visual of a traditional play script page. As the instructor narrates, use color-coded highlights to identify acts, scenes, character names, and various types of stage directions (entrance, action, sound). Then, transition to a split-screen view, showing the original script on one side and the corresponding TEI XML on the other. Animate the mapping of each script element to its TEI tag (`<div type="act">`, `<div type="scene">`, `<sp>`, `<speaker>`, `<stage type="...">`, `<l>`). Focus on the nuances of `@type` attributes for `<stage>` elements. Conclude with a 2-minute interactive drag-and-drop exercise where learners match script excerpts to their correct TEI elements. Ensure full captions and a downloadable cheat sheet of common TEI drama tags.

---

### Chapter 7.4 — Encoding Verse and Poetic Texts

#### Learning objectives
*   Identify the unique structural characteristics of poetic texts, including lineation, stanzas, and metrical patterns.
*   Apply TEI elements such as `<lg>` (line group) and `<l>` (line) to accurately represent the visual and semantic structure of verse.
*   Utilize attributes like `@n` for line numbering and `@rhyme` for rhyme schemes to enhance the analytical potential of poetic encoding.
*   Address the complexities of encoding irregular verse, enjambment, and other non-standard poetic forms, while avoiding common interpretive pitfalls.

#### Detailed lesson content
Encoding verse and poetic texts requires a specialized approach that respects the intrinsic formal qualities of poetry, which are often as significant as its semantic content. Unlike prose, where line breaks are typically determined by page width, lineation in poetry is deliberate, contributing to rhythm, meter, and meaning. Stanzaic structure, rhyme schemes, and metrical patterns are fundamental to a poem's identity and impact. TEI provides robust tools to capture these features, allowing scholars to move beyond mere transcription to a structured representation that facilitates computational analysis of prosody, form, and textual aesthetics. The goal is to preserve the visual and auditory dimensions of poetry in a machine-readable format.

The most fundamental TEI elements for encoding verse are `<lg>` (line group) and `<l>` (line). The `<l>` element is used for a single line of verse. It is crucial to remember that each `<l>` should correspond to a single poetic line, regardless of how it might be broken visually if it's a very long line. The `<lg>` element is used to group related lines, most commonly to represent stanzas, but also for other coherent units of verse such as refrains, choruses, or even couplets. The `@n` attribute can be used on both `<lg>` and `<l>` to provide numbering, which is particularly useful for referencing specific stanzas or lines within a poem.

Consider an excerpt from a Shakespearean sonnet:

```xml
<text>
  <body>
    <div type="poem">
      <lg n="1">
        <l n="1">When my love swears that she is made of truth,</l>
        <l n="2">I do believe her, though I know she lies,</l>
        <l n="3">That she might think me some untutored youth,</l>
        <l n="4">Unlearned in the world's false subtleties.</l>
      </lg>
      <lg n="2">
        <l n="5">Thus vainly thinking that she thinks me young,</l>
        <l n="6">Although I know my years be past the best,</l>
        <l n="7">I smiling credit her false-speaking tongue,</l>
        <l n="8">Outfacing faults in love with love's ill rest.</l>
      </lg>
    </div>
  </body>
</text>
```

Beyond basic line and stanza structure, TEI allows for the encoding of more sophisticated poetic features. The `@rhyme` attribute on the `<l>` element is particularly powerful for analyzing rhyme schemes. You can assign a unique identifier (e.g., "a", "b", "c") to each rhyming sound. This enables automated analysis of rhyme patterns across a poem or a collection of poems. For instance:

```xml
<lg n="1">
  <l n="1" rhyme="a">I'm nobody! Who are you?</l>
  <l n="2" rhyme="b">Are you nobody, too?</l>
  <l n="3" rhyme="a">Then there's a pair of us - don't tell!</l>
  <l n="4" rhyme="b">They'd banish us, you know.</l>
</lg>
```
(From Emily Dickinson's "I'm Nobody! Who are you?")

Similarly, the `@met` attribute can be used on the `<l>` element to indicate the metrical pattern of a line (e.g., `met="iambic pentameter"`). While detailed scansion is often done externally, this attribute provides a high-level descriptor for metrical analysis.

One of the most common interpretive pitfalls in encoding poetry is misinterpreting line breaks, especially in texts where the original formatting might be ambiguous or where **enjambment** (the continuation of a sentence without a pause beyond the end of a line, couplet, or stanza) is present. An `<l>` element should always represent a complete poetic line as intended by the author or editor, even if it runs over multiple visual lines on a printed page. If a single poetic line is visually broken across two physical lines due to page width, it should still be encoded as a single `<l>` element, potentially using `<lb/>` within it to mark the visual break if that is deemed significant. However, in most cases, the `<l>` element itself is sufficient to capture the poetic line. Another challenge arises with **irregular verse forms** or **free verse**, where traditional stanzaic divisions or consistent line lengths are absent. In such cases, the `<lg>` element might be used more flexibly to group lines based on thematic coherence or visual breaks, or it might be omitted if no logical grouping beyond individual lines exists. The key is to be consistent in your application and to document your encoding decisions in the `<teiHeader>`'s `<encodingDesc>`. Always prioritize the poetic unit (the line, the stanza) over arbitrary visual formatting.

For longer poems or collections, the `<div type="poem">` element is used to contain an entire poem, and a `<div type="collection">` could group multiple poems. When encoding poetic drama (as discussed in Chapter 7.3), `<l>` elements are nested within `<sp>` elements, allowing the encoding to capture both the dramatic and poetic structure simultaneously. The progressive complexity in TEI allows for this kind of layering, enabling a rich, multi-faceted representation of complex textual forms.

#### Key concepts
*   **`<lg>`:** (Line Group) A TEI element used to group lines of verse, typically representing a stanza or other coherent poetic unit.
*   **`<l>`:** (Line) A TEI element used for a single line of verse.
*   **`@n` attribute:** Used on `<lg>` or `<l>` to provide numbering for stanzas or lines.
*   **`@rhyme` attribute:** Used on `<l>` to indicate the rhyme scheme of a line.
*   **`@met` attribute:** Used on `<l>` to indicate the metrical pattern of a line.
*   **Enjambment:** The continuation of a sentence without a pause beyond the end of a line, couplet, or stanza.
*   **Free Verse:** Poetry that does not rhyme or have a regular meter.
*   **`<div type="poem">`:** A structural division for an entire poem.

#### Hands-on activity
**Encoding a Poetic Stanza**

Consider this stanza from a poem:

```
The woods are lovely, dark and deep,
But I have promises to keep,
And miles to go before I sleep,
And miles to go before I sleep.
```
(From Robert Frost's "Stopping by Woods on a Snowy Evening")

Your task is to encode this stanza using `<lg>` and `<l>` elements, including line numbering and a simple rhyme scheme.

```xml
<text>
  <body>
    <div type="poem">
      <lg n="1">
        <l n="1" rhyme="a">The woods are lovely, dark and deep,</l>
        <l n="2" rhyme="a">But I have promises to keep,</l>
        <l n="3" rhyme="b">And miles to go before I sleep,</l>
        <l n="4" rhyme="a">And miles to go before I sleep.</l>
      </lg>
    </div>
  </body>
</text>
```
(Note: While the last line rhymes with the first two, it's often considered a distinct poetic choice, but for a simple `aaba` or `aaaa` pattern, `a` is sufficient for all rhyming lines. For this exercise, `aaba` is a valid interpretation of the common rhyme scheme.)

#### Assessment idea
1.  **Question:** You are encoding a poem with a consistent four-line stanza structure (quatrains) and an ABAB rhyme scheme. The first stanza is:
    "O, my luve's like a red, red rose, (A)
    That's newly sprung in June; (B)
    O, my luve's like the melodie, (A)
    That's sweetly play'd in tune. (B)"
    (From Robert Burns' "A Red, Red Rose")
    How would you encode this stanza using `<lg>`, `<l>`, and the `@rhyme` attribute?

    **Model Response:**
    ```xml
    <lg n="1">
      <l n="1" rhyme="a">O, my luve's like a red, red rose,</l>
      <l n="2" rhyme="b">That's newly sprung in June;</l>
      <l n="3" rhyme="a">O, my luve's like the melodie,</l>
      <l n="4" rhyme="b">That's sweetly play'd in tune.</l>
    </lg>
    ```

2.  **Question:** Discuss the primary difference between how line breaks are treated in prose versus verse within TEI encoding. What is the significance of the `<l>` element in poetry, and what common pitfall should encoders avoid when dealing with long poetic lines that might wrap in a printed edition?

    **Model Response:**
    The primary difference is that in prose, line breaks are generally considered arbitrary formatting artifacts (e.g., determined by page width or screen size) and are typically not encoded unless they carry specific semantic meaning (e.g., in a diplomatic transcription). In verse, however, **line breaks are fundamental structural and semantic units** of the poem.

    The **`<l>` element** is significant in poetry because it explicitly marks a single poetic line, preserving the author's intended lineation, which is crucial for rhythm, meter, and visual presentation. It treats each line as a distinct unit of meaning and sound.

    A common pitfall to avoid is treating a single poetic line that wraps onto a second physical line in a printed edition (due to narrow page margins, for example) as two separate `<l>` elements. Instead, such a line should still be encoded as a **single `<l>` element**. If it's absolutely necessary to mark the visual break, a `<lb/>` (line break) element can be inserted *within* the single `<l>` element, but the default assumption is that `<l>` represents the poetic unit, not the physical line on a page. Misinterpreting this can lead to incorrect line numbering, disrupted metrical analysis, and a distorted representation of the poem's form.

#### AI generation note
Create an 11-minute interactive reading walkthrough. Display a well-known poem (e.g., a sonnet by Shakespeare, "The Raven" by Poe, or a free verse poem by Walt Whitman) on the left side of the screen. As an instructor's voiceover reads the poem, use animated highlights to show the natural pauses, metrical patterns, and rhyme scheme. On the right side, show the corresponding TEI XML. Demonstrate how `<lg>` groups stanzas and `<l>` marks individual lines. Use color-coded highlights for `@rhyme` and `@n` attributes. Include a short segment on enjambment, showing how a single `<l>` element can span multiple visual lines. End with a 3-minute interactive exercise where learners are given a new short poem and asked to drag and drop `<l>` and `<lg>` tags into the correct positions, then assign simple rhyme letters. Provide full captions and a downloadable PDF of the analyzed poem with its TEI.

---

### Chapter 7.5 — Encoding Dictionaries and Lexical Resources

#### Learning objectives
*   Identify the complex hierarchical structure and common components of dictionary entries.
*   Apply TEI elements such as `<entry>`, `<form>`, `<orth>`, `<gramGrp>`, `<sense>`, `<def>`, and `<etym>` to accurately encode lexical data.
*   Understand how to represent different forms of a word (e.g., inflections, pronunciations) and multiple senses within a single dictionary entry.
*   Address the challenges of encoding cross-references, usage examples, and specialized lexicographical information.

#### Detailed lesson content
Encoding dictionaries and other lexical resources represents a significant step into structured data modeling within TEI. Unlike linear texts, dictionaries are highly organized collections of discrete entries, each containing a wealth of sub-components: headwords, pronunciations, etymologies, grammatical information, multiple senses, definitions, usage examples, and cross-references. Capturing this intricate hierarchy in TEI transforms a static reference work into a dynamic, queryable database, enabling advanced lexicographical research, linguistic analysis, and the creation of digital lexicons. The goal is to make the rich, granular data within dictionaries accessible for computational processing and interoperability.

The fundamental unit of a dictionary is the `<entry>` element, which encapsulates all information related to a single headword or lemma. Within an `<entry>`, the first crucial component is the `<form>` element, which describes the various forms a word can take. The primary form, or headword, is typically represented by `<orth>` (orthography), often with an `@type="lemma"`. Other forms might include `<pron>` (pronunciation) for phonetic transcriptions, or additional `<orth>` elements for inflected forms or alternative spellings. For example:

```xml
<entry xml:id="word-run">
  <form type="lemma">
    <orth>run</orth>
    <pron>rʌn</pron>
  </form>
  <form type="inflection">
    <orth>runs</orth>
    <gramGrp><usg type="gram">3rd pers. sing. pres.</usg></gramGrp>
  </form>
  <form type="inflection">
    <orth>ran</orth>
    <gramGrp><usg type="gram">past tense</usg></gramGrp>
  </form>
  <!-- ... other forms ... -->
</entry>
```

Following the forms, a dictionary entry typically includes grammatical information, represented by the `<gramGrp>` (grammatical group) element. This might contain `<pos>` (part of speech, e.g., "noun", "verb"), `<gen>` (gender), `<num>` (number), or other grammatical categories. The `<usg>` element can be used more broadly for usage notes, stylistic labels, or domain-specific tags.

The core of most dictionary entries lies in their **senses and definitions**. A word often has multiple meanings, and TEI uses the `<sense>` element to group information related to a single meaning. Each `<sense>` typically contains a `<def>` (definition) element, providing the explanation of that specific meaning. Within a `<sense>`, you might also find `<usg>` for usage examples, `<cit>` for illustrative quotations, or `<lbl>` for labels (e.g., "archaic", "colloquial"). Multiple `<sense>` elements are nested sequentially within an `<entry>` to represent the different meanings of a word.

```xml
<entry xml:id="word-run">
  <!-- ... forms and gramGrp ... -->
  <sense n="1">
    <def>To move at a speed faster than a walk, never having both feet on the ground at the same time.</def>
    <cit type="example">
      <quote>He <hi rend="italic">ran</hi> to catch the bus.</quote>
      <bibl>Example sentence</bibl>
    </cit>
  </sense>
  <sense n="2">
    <def>To flow or cause to flow.</def>
    <cit type="example">
      <quote>The river <hi rend="italic">runs</hi> to the sea.</quote>
      <bibl>Example sentence</bibl>
    </cit>
  </sense>
  <!-- ... more senses ... -->
</entry>
```

Another crucial component of many dictionaries is **etymology**, which traces the historical development of a word. The `<etym>` element is used for this purpose, often containing a `<p>` with the etymological explanation, and potentially `<lang>` elements to identify source languages. **Cross-references** are also vital for navigating dictionaries. TEI provides `<ref>` and `<ptr>` elements, which can be used to link to other entries within the same dictionary or to external resources. For instance, `<ref target="#word-sprint">See also sprint</ref>` could be used within a definition.

A common mistake in encoding dictionaries is failing to maintain the strict hierarchy of elements or to distinguish clearly between different senses. Forgetting to use `<sense>` for each distinct meaning can lead to a flat structure where definitions are conflated. Another pitfall is not consistently using `@n` attributes for senses, which makes it harder to reference specific meanings programmatically. The complexity of dictionary encoding lies in its highly recursive and nested nature. Each element serves a precise lexicographical function, and understanding these functions is key to creating a semantically rich and analytically powerful digital lexicon. Always remember that the goal is not just to display the dictionary, but to make its underlying data structure explicit and queryable.

#### Key concepts
*   **`<entry>`:** The fundamental TEI element for a single dictionary entry.
*   **`<form>`:** Contains information about the orthography, pronunciation, and other forms of a word.
*   **`<orth>`:** (Orthography) The written form of a word, typically the headword.
*   **`<pron>`:** (Pronunciation) The phonetic transcription of a word.
*   **`<gramGrp>`:** (Grammatical Group) Contains grammatical information about a word (e.g., part of speech).
*   **`<pos>`:** (Part of Speech) Specifies the grammatical category of a word (e.g., noun, verb).
*   **`<sense>`:** Groups information related to a single meaning or definition of a word.
*   **`<def>`:** (Definition) Provides the explanation of a word's meaning.
*   **`<etym>`:** (Etymology) Contains information about the historical origin and development of a word.
*   **`<usg>`:** (Usage) Marks usage notes, stylistic labels, or usage examples.
*   **Cross-references:** Links from one dictionary entry to another, often using `<ref>`.

#### Hands-on activity
**Encoding a Dictionary Entry Fragment**

Consider this simplified dictionary entry for the word "bank":

```
bank /bæŋk/ noun.
1. The land alongside or sloping down to a river or lake.
   Example: "The children played on the river bank."
2. A financial institution that accepts deposits and makes loans.
   Example: "I need to go to the bank to deposit a check."
Etymology: From Old Norse "banki" (sandbank).
```

Your task is to encode this fragment using the appropriate TEI elements for a dictionary entry.

```xml
<text>
  <body>
    <entry xml:id="word-bank">
      <form type="lemma">
        <orth>bank</orth>
        <pron>/bæŋk/</pron>
      </form>
      <gramGrp>
        <pos>noun</pos>
      </gramGrp>
      <sense n="1">
        <def>The land alongside or sloping down to a river or lake.</def>
        <usg type="example">
          <quote>The children played on the river bank.</quote>
        </usg>
      </sense>
      <sense n="2">
        <def>A financial institution that accepts deposits and makes loans.</def>
        <usg type="example">
          <quote>I need to go to the bank to deposit a check.</quote>
        </usg>
      </sense>
      <etym>From Old Norse "<hi rend="italic">banki</hi>" (sandbank).</etym>
    </entry>
  </body>
</text>
```
(Note: A full TEI document would include a `<teiHeader>` and potentially a `<div type="dictionary">` wrapper.)

#### Assessment idea
1.  **Question:** You are encoding a dictionary entry for the word "light" which has two main senses: 1) "the natural agent that stimulates sight" and 2) "a device for illuminating." It also has a verb form: "to illuminate." How would you structure this entry using `<entry>`, `<form>`, `<gramGrp>`, and `<sense>` elements to clearly distinguish between the different parts of speech and senses?

    **Model Response:**
    ```xml
    <entry xml:id="word-light">
      <form type="lemma">
        <orth>light</orth>
      </form>
      <gramGrp>
        <pos>noun</pos>
      </gramGrp>
      <sense n="1">
        <def>The natural agent that stimulates sight.</def>
      </sense>
      <sense n="2">
        <def>A device for illuminating.</def>
      </sense>
      <gramGrp>
        <pos>verb</pos>
      </gramGrp>
      <sense n="3">
        <def>To illuminate.</def>
      </sense>
    </entry>
    ```

2.  **Question:** Discuss the importance of the `<sense>` element in encoding dictionaries and what common mistake encoders make if they omit or misuse it. How does the `@n` attribute on `<sense>` enhance the utility of a digital dictionary?

    **Model Response:**
    The **`<sense>` element** is of paramount importance in encoding dictionaries because it provides the structural means to group all information related to a *single distinct meaning* of a word. Words are often polysemous (have multiple meanings), and the `<sense>` element ensures that each definition, along with its associated examples, usage notes, and other specific details, is clearly demarcated and associated with only one meaning.

    A **common mistake** is to omit the `<sense>` element or to use it inconsistently, leading to a flat structure where definitions and examples for different meanings are conflated or simply listed sequentially without clear semantic separation. This makes it extremely difficult for a machine (or even a human) to accurately identify and extract information pertaining to a specific meaning, severely hindering the dictionary's utility for linguistic analysis, database integration, or cross-referencing.

    The **`@n` attribute** on `<sense>` (e.g., `n="1"`, `n="2"`) further enhances the utility of a digital dictionary by providing a stable, machine-readable identifier for each specific meaning. This allows for:
    *   **Precise Referencing:** Researchers can link directly to "light, sense 1" or "light, sense 2" in their analyses or in cross-references, disambiguating meanings.
    *   **Data Extraction and Aggregation:** It facilitates the extraction of all definitions for a specific sense across a corpus, or the comparison of how different dictionaries define the same sense.
    *   **Semantic Annotation:** It enables the annotation of texts with specific word senses, which is crucial for computational linguistics and natural language processing.
    *   **User Interface Design:** It can be used to structure the display of dictionary entries in a user-friendly way, allowing users to easily navigate between different meanings.

#### AI generation note
Create a 13-minute interactive video lecture. Begin by displaying a scan of a complex dictionary entry (e.g., from Samuel Johnson's *Dictionary of the English Language* or the OED, focusing on a word with multiple senses and etymology). Use animated highlights to deconstruct the entry into its core components: headword, pronunciation, part of speech, multiple senses, definitions, usage examples, and etymology. Transition to a split-screen view showing the dictionary entry on one side and the corresponding TEI XML on the other. Systematically map each highlighted component to its TEI element (`<entry>`, `<form>`, `<orth>`, `<pron>`, `<gramGrp>`, `<pos>`, `<sense>`, `<def>`, `<usg>`, `<etym>`). Emphasize the nesting of `<sense>` elements and the use of `@n` attributes. Include a 4-question interactive quiz where learners identify the correct TEI element for specific parts of a new dictionary entry. Provide full captions and a downloadable TEI XML template for a dictionary entry.

---

### Chapter 7.6 — Advanced TEI for Critical Editions and Textual Variation

#### Learning objectives
*   Understand the theoretical underpinnings of critical editing and the representation of textual variation in TEI.
*   Apply TEI elements such as `<app>` (apparatus entry), `<lem>` (lemma), `<rdg>` (reading), and `<wit>` (witness) to construct a critical apparatus.
*   Learn to encode different types of textual changes, including additions, deletions, substitutions, and transpositions, using the revision module.
*   Address the complexities of encoding stemmatic relationships and managing a large number of witnesses in a scholarly edition.

#### Detailed lesson content
Creating a critical edition is one of the most intellectually demanding tasks in textual scholarship, involving the collation of multiple textual witnesses (manuscripts, early printed editions) to establish a "best" or "most authoritative" text, while also documenting all significant variations. TEI provides a powerful and flexible framework for representing this complex textual landscape, moving beyond simple transcription to a structured encoding of the entire textual tradition. This allows scholars to not only present a reading text but also to analyze the history of a text's transmission, the choices made by scribes and printers, and the evolution of its meaning over time. The goal is to make the textual apparatus a dynamic, queryable resource rather than a static, often cumbersome, footnote.

At the heart of representing textual variation in TEI is the **Critical Apparatus module**, specifically the `<app>` (apparatus entry) element. An `<app>` element groups together all variant readings for a particular point in the text. Within an `<app>`, the `<lem>` (lemma) element represents the reading adopted in the main text of the edition (the "copy-text" or "edited text"). The `<rdg>` (reading) element represents an alternative reading found in one or more witnesses. Each `<rdg>` element typically includes a `@wit` attribute, which points to one or more `<witness>` elements (defined in the `<listWit>` in the `<teiHeader>`) to indicate which source(s) support that particular reading.

Consider an example of a textual variant:

Original text: "The quick brown fox jumps over the lazy dog."
Variant 1 (MS A): "The quick brown fox *leaps* over the lazy dog."
Variant 2 (MS B): "The quick brown fox jumps over the *sleeping* dog."

In TEI, this might be encoded as:

```xml
<p>The quick brown fox <app>
  <lem wit="#Ed1">jumps</lem>
  <rdg wit="#MSA">leaps</rdg>
</app> over the lazy <app>
  <lem wit="#Ed1">dog</lem>
  <rdg wit="#MSB">sleeping dog</rdg>
</app>.</p>
```
(Note: `#Ed1`, `#MSA`, `#MSB` would refer to `<witness>` elements defined in the `<teiHeader>`).

The `<listWit>` element within the `<teiHeader>`'s `<sourceDesc>` is where all the textual witnesses are declared using `<witness>` elements. Each `<witness>` should have a unique `xml:id` and can contain a `<msIdentifier>` or `<bibl>` to provide full bibliographic details. This central declaration allows for consistent referencing throughout the apparatus.

Beyond simple substitutions, TEI also provides elements for more complex textual changes, particularly useful when tracking revisions within a single document or comparing drafts. The **Revision module** offers elements like `<add>` (addition), `<del>` (deletion), and `<subst>` (substitution) which can be used to explicitly mark up textual changes. For example, if an author revised a word: `<subst><del>old word</del><add>new word</add></subst>`. The `@when` attribute can be used to timestamp the change, and `@who` to attribute it to a specific person. This is particularly powerful for genetic criticism, where the evolution of a text through its various stages of composition is paramount.

A significant challenge in critical editing is the representation of **stemmatic relationships** – the genealogical tree showing the descent of textual witnesses from a common ancestor. While TEI does not have a dedicated element for drawing stemmata directly, the relationships between witnesses can be described using the `<listWit>` element and its attributes. For instance, a `<witness>` element can have a `@corresp` attribute pointing to its parent, or a `<listRelation>` can be used to define more complex relationships between witnesses. However, visualizing stemmata typically requires external tools that process the TEI data.

Common interpretive pitfalls include misidentifying the lemma (the base reading) in an apparatus, especially when no single witness is clearly superior. Another pitfall is inconsistent application of `@wit` attributes, leading to ambiguity about which witnesses support which readings. Furthermore, conflating the apparatus (which documents variants) with the revision module (which marks explicit changes) can lead to an unclear representation of the text's history. Scholarly caution dictates that every decision in the apparatus, from the choice of lemma to the attribution of witnesses, must be transparent and justifiable, and TEI's structured approach helps enforce this transparency. The progressive complexity of TEI allows for a basic apparatus to be built first, then gradually enriched with more detailed witness information, specific types of changes, and eventually, the groundwork for stemmatic analysis.

#### Key concepts
*   **Critical Edition:** A scholarly edition that establishes a "best" text by comparing multiple textual witnesses and documenting variations.
*   **Textual Witness:** A manuscript, early printed edition, or other source containing a version of a text.
*   **Critical Apparatus:** A section of a critical edition that documents textual variations between witnesses.
*   **`<app>`:** (Apparatus Entry) A TEI element that groups all variant readings for a specific point in the text.
*   **`<lem>`:** (Lemma) The reading adopted in the main text of a critical edition.
*   **`<rdg>`:** (Reading) An alternative reading found in one or more textual witnesses.
*   **`<wit>` attribute:** Used on `<lem>` and `<rdg>` to point to the textual witness(es) supporting a particular reading.
*   **`<listWit>`:** A list of all textual witnesses declared in the `<teiHeader>`.
*   **`<witness>`:** An individual entry in `<listWit>`, describing a textual witness.
*   **Revision Module:** A set of TEI elements (`<add>`, `<del>`, `<subst>`) used to mark explicit textual changes or revisions.
*   **Stemmatic Relationships:** The genealogical relationships between textual witnesses, often represented as a tree (stemma).

#### Hands-on activity
**Building a Simple Critical Apparatus**

Consider the following passage and its variants from three witnesses (W1, W2, W3):

Main text (Editor's choice): "The sun <hi rend="bold">shines</hi> brightly."
Witness W1: "The sun <hi rend="bold">glows</hi> brightly."
Witness W2: "The sun shines <hi rend="bold">very</hi> brightly."
Witness W3: "The sun <hi rend="bold">shines</hi> brightly." (Matches main text)

Your task is to encode the main text with a critical apparatus for the word "shines" and the potential addition of "very". Assume the editor's main text is based on W3.

```xml
<text>
  <body>
    <p>The sun <app>
      <lem wit="#W3">shines</lem>
      <rdg wit="#W1">glows</rdg>
    </app> <app>
      <lem wit="#W3">brightly</lem>
      <rdg wit="#W2">very brightly</rdg>
    </app>.</p>
  </body>
</text>
```
(Note: For a full document, `<teiHeader>` would include `<listWit>` with `<witness xml:id="W1">`, `<witness xml:id="W2">`, `<witness xml:id="W3">`.)

#### Assessment idea
1.  **Question:** You are creating a critical edition of a poem with two manuscripts, MS A and MS B, and a first printed edition, Ed1. The main text of your edition is based on Ed1. For a particular line, Ed1 reads "The ancient mariner," MS A reads "The old mariner," and MS B reads "An ancient mariner." How would you encode the apparatus for this line, using `<app>`, `<lem>`, `<rdg>`, and `@wit`? Assume `xml:id`s `#MSA`, `#MSB`, `#Ed1` for the witnesses.

    **Model Response:**
    ```xml
    <l><app>
      <lem wit="#Ed1">The ancient</lem>
      <rdg wit="#MSA">The old</rdg>
      <rdg wit="#MSB">An ancient</rdg>
    </app> mariner,</l>
    ```

2.  **Question:** Explain the difference in purpose and application between the TEI Critical Apparatus module (using `<app>`, `<lem>`, `<rdg>`) and the TEI Revision module (using `<add>`, `<del>`, `<subst>`). When would you choose one over the other, and what kind of scholarly questions does each module help address?

    **Model Response:**
    The **TEI Critical Apparatus module** (using `<app>`, `<lem>`, `<rdg>`) is primarily designed for documenting **textual variations across multiple independent witnesses** of a text (e.g., different manuscripts, early printed editions). Its purpose is to present a critical edition where a main reading (lemma) is chosen, and alternative readings from other sources are recorded in an apparatus. It addresses questions like:
    *   What are all the different versions of a specific word or phrase?
    *   Which witnesses support which readings?
    *   How did the text evolve through its transmission history across different copies?
    *   What is the "best" reading given the available evidence?

    The **TEI Revision module** (using `<add>`, `<del>`, `<subst>`) is primarily designed for documenting **explicit changes or revisions *within a single document or its drafts***. It marks the process of composition and revision, showing what was added, deleted, or substituted by an author or reviser. It addresses questions like:
    *   How did an author revise their work over time?
    *   What were the stages of composition for a particular text?
    *   Who made specific changes and when?
    *   What was the original reading before a specific alteration?

    **When to choose one over the other:**
    *   Choose the **Critical Apparatus module** when you are comparing *different copies or editions* of a text to establish a scholarly edition and document the textual tradition.
    *   Choose the **Revision module** when you are working with *drafts, corrected proofs, or heavily annotated single documents* to track the author's or editor's compositional process and specific alterations.

    While there can be some overlap, the core distinction lies in whether you are comparing *multiple distinct textual states* (apparatus) or tracking *changes within the evolution of a single textual state* (revision). Misusing them can obscure the nature of the textual evidence being presented.

#### AI generation note
Create a 14-minute video lecture with a focus on a specific passage from a well-known critical edition (e.g., a Shakespeare play, a medieval poem, or a classical text). Start by displaying a typical critical edition page, highlighting the main text and the apparatus criticus at the bottom. Explain the concept of a lemma and variant readings. Transition to a split-screen view: the left side shows the critical edition page, and the right side shows the corresponding TEI XML. Systematically map the lemma to `<lem>` and each variant reading to `<rdg>`, emphasizing the `@wit` attribute and its link to `<witness>` declarations. Include animated overlays to demonstrate how different witnesses support different readings. Briefly touch upon the Revision module with a simple example of `<subst>` for an author's 
*   Explore methods for transforming TEI XML into other formats (e.g., HTML, JSON, CSV) using XSLT and other tools.
*   Learn how to integrate TEI data with external resources and standards, such as Linked Open Data (LOD), GIS, and network analysis tools.
*   Identify common challenges and best practices for ensuring data longevity, reusability, and accessibility when working with TEI in DH projects.

#### Detailed lesson content
The true power of TEI extends beyond merely encoding texts; it lies in its ability to serve as a robust, standardized foundation for interoperability within the broader Digital Humanities (DH) landscape. A TEI document is not an endpoint but a starting point for further analysis, visualization, and integration with other digital tools and data. Understanding how to transform, extract, and connect TEI data to other systems is crucial for maximizing its research potential and ensuring the longevity and reusability of scholarly editions. This chapter explores the practical methodologies for making TEI a dynamic component of a larger DH project, emphasizing the principles of data openness and semantic enrichment.

One of the most common integration tasks is **transforming TEI XML into other formats** for presentation or further processing. The primary tool for this is **XSLT (Extensible Stylesheet Language Transformations)**. XSLT allows you to write stylesheets that define how TEI elements should be converted into HTML for web display, into plain text for search indexing, or even into other XML vocabularies. For instance, an XSLT stylesheet can iterate through all `<p>` elements in a TEI document and wrap them in `<p>` tags for HTML, or extract all `<persName>` elements and format them as a list of individuals. For more structured data extraction, such as creating a dataset of all characters and their speaking parts from a TEI-encoded play, XSLT can transform the TEI into CSV (Comma Separated Values) or JSON (JavaScript Object Notation), which are easily consumed by databases, statistical software, or web applications. This transformation capability is what makes TEI a flexible intermediate format rather than a proprietary silo.

```xml
<!-- Example XSLT snippet for converting TEI <p> to HTML <p> -->
<xsl:template match="tei:p">
  <p><xsl:apply-templates/></p>
</xsl:template>

<!-- Example XSLT snippet for extracting person names -->
<xsl:template match="tei:persName">
  <li><xsl:value-of select="."/></li>
</xsl:template>
```

Beyond basic transformations, TEI data can be significantly enriched by **integrating with external resources and standards**. **Linked Open Data (LOD)** is a paradigm for publishing structured data on the web, linking it to other data sources, and making it machine-readable. By using `ref` attributes in TEI (e.g., `<persName ref="http://www.wikidata.org/entity/Q5">Aristotle</persName>`), TEI documents can link to external authority files like Wikidata, GeoNames, or VIAF. This not only disambiguates entities (persons, places, organizations) but also connects the TEI document to a vast web of semantic information, enabling richer queries and visualizations. For example, once a `<placeName>` is linked to GeoNames, its coordinates can be extracted for **Geographic Information Systems (GIS)** mapping, allowing scholars to visualize the spatial dimensions of a text. Similarly, `<persName>` links can be used to build **social networks** in tools like Gephi, analyzing character relationships or historical correspondence patterns.

A common challenge in integration is **data loss or misinterpretation during transformation**. When converting TEI to a simpler format like HTML or CSV, some of the rich semantic markup might be lost if the XSLT stylesheet is not carefully designed. For example, if you convert a TEI document with `<add>` and `<del>` elements to plain HTML without special handling, the revision history might become invisible. Another pitfall is assuming that TEI's internal `xml:id`s are sufficient for external linking; for robust interoperability, external URIs (Uniform Resource Identifiers) should be used via `ref` attributes. **Best practices** include:
1.  **Modular XSLT:** Create separate stylesheets for different output formats or specific data extraction tasks.
2.  **Schema Validation:** Always validate your TEI against its schema (often a custom ODD-generated schema) before transformation to ensure data integrity.
3.  **Documentation:** Clearly document your encoding decisions and transformation processes.
4.  **Persistent Identifiers:** Use stable URIs for external entities to ensure links don't break over time.
5.  **Data Longevity and Accessibility:** Store TEI XML in well-managed repositories, use open standards, and consider long-term preservation strategies.

The progressive nature of TEI encoding, moving from basic structure to advanced markup and finally to integration, ensures that the scholarly effort invested in creating digital editions yields maximum impact in the broader Digital Humanities research landscape. By embracing these integration strategies, TEI documents become active participants in the digital ecosystem, fostering new forms of inquiry and discovery.

#### Key concepts
*   **Interoperability:** The ability of different computer systems or software to exchange and make use of information.
*   **XSLT (Extensible Stylesheet Language Transformations):** A language for transforming XML documents into other XML documents, HTML, or other formats.
*   **JSON (JavaScript Object Notation):** A lightweight data-interchange format, often used for web applications.
*   **CSV (Comma Separated Values):** A simple file format used to store tabular data.
*   **Linked Open Data (LOD):** A method of publishing structured data so that it can be interlinked and become more useful through semantic queries.
*   **URI (Uniform Resource Identifier):** A string of characters used to identify a resource on the internet (e.g., a person, place, concept).
*   **GIS (Geographic Information Systems):** Systems for capturing, storing, analyzing, and managing spatial or geographical data.
*   **Network Analysis:** A method for studying relationships between entities, often visualized as graphs.
*   **Data Longevity:** The ability of data to remain accessible and usable over long periods.
*   **Data Reusability:** The ability to use data for purposes beyond those for which it was originally collected.

#### Hands-on activity
**Extracting Named Entities from TEI using XPath (Conceptual)**

Imagine you have a TEI document with several `<persName>` and `<placeName>` elements. Your goal is to extract a list of all unique person names and place names from the document. While full XSLT is complex, you can use **XPath** expressions to conceptually identify these elements.

**Task:** Write the XPath expressions that would select all `<persName>` elements and all `<placeName>` elements in a TEI document.

**XPath Expressions:**
1.  To select all person names: `//tei:persName`
2.  To select all place names: `//tei:placeName`

(In a real-world scenario, these XPath expressions would be used within an XSLT stylesheet or a programming language like Python to extract and process the data.)

#### Assessment idea
1.  **Question:** You have a TEI-encoded collection of historical letters, and you want to visualize the geographic locations mentioned in them on a map. What TEI element would you primarily use to mark these locations, and how would you connect this TEI data to a GIS tool using the principles of Linked Open Data?

    **Model Response:**
    To mark geographic locations, you would primarily use the TEI `<placeName>` element.
    To connect this TEI data to a GIS tool using LOD principles, you would:
    1.  Add a `ref` attribute to each `<placeName>` element, pointing to a stable URI for that location in a Linked Open Data gazetteer (e.g., GeoNames, Wikidata). For example: `<placeName ref="http://www.geonames.org/2643743">London</placeName>`.
    2.  Use an XSLT transformation to extract all `<placeName>` elements and their associated `ref` URIs.
    3.  For each URI, query the LOD service (e.g., GeoNames API) to retrieve the geographic coordinates (latitude and longitude).
    4.  Format these coordinates and place names into a standard GIS-compatible format (e.g., GeoJSON, KML, or a simple CSV with columns for Name, Latitude, Longitude).
    5.  Import this formatted data into a GIS tool (e.g., QGIS, Google Maps API) for visualization.

2.  **Question:** Explain the role of XSLT in the context of integrating TEI documents with other digital humanities tools and platforms. What are two common output formats for TEI data generated via XSLT, and for what purpose would each format typically be used? What is a common pitfall when performing these transformations?

    **Model Response:**
    **XSLT** (Extensible Stylesheet Language Transformations) plays a crucial role in integrating TEI documents by acting as the primary mechanism for **transforming TEI XML into other formats**. Since TEI is a highly structured but verbose XML vocabulary, it needs to be converted into more user-friendly or machine-readable formats for display on the web, for data analysis, or for interoperability with other software. XSLT stylesheets define the rules for this conversion, allowing selective extraction, reordering, and reformatting of TEI content.

    Two common output formats for TEI data generated via XSLT are:
    1.  **HTML (HyperText Markup Language):** This is typically used for **web publication and display**. An XSLT stylesheet can transform TEI elements (e.g., `<p>`, `<l>`, `<head>`) into their corresponding HTML tags, allowing the scholarly edition to be rendered in a web browser for human readability. It enables the creation of interactive digital editions.
    2.  **JSON (JavaScript Object Notation) or CSV (Comma Separated Values):** These formats are typically used for **data extraction, analysis, and integration with databases or programming languages**. For example, an XSLT could extract all `<persName>` and `<placeName>` elements, along with their attributes, and output them as a JSON array or a CSV table. This data can then be imported into statistical software, network analysis tools, or used by web APIs for dynamic data presentation.

    A **common pitfall** when performing these transformations is **data loss or oversimplification**. If the XSLT stylesheet is not carefully designed, it might discard valuable semantic information present in the TEI. For instance, converting a TEI document with detailed revision markup (`<add>`, `<del>`) directly to plain HTML without any special styling or interactive features would effectively hide the textual history. Similarly, converting complex nested TEI structures to a flat CSV file can lose hierarchical relationships. The key is to ensure that the transformation preserves the necessary level of detail for the intended purpose, or to create multiple transformations for different purposes.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with a 5-minute animated explanation of XSLT's role in DH, using a visual metaphor of a "data translator" or "data chef" transforming raw ingredients (TEI XML) into various dishes (HTML, JSON, CSV). Show simple code snippets of XSLT matching TEI elements and generating output. Then, transition to a 7-minute screen-share demonstration: open a TEI XML file, then apply a simple XSLT stylesheet to transform it into HTML for web display, highlighting the resulting HTML in a browser. Next, show how to apply another XSLT to extract all `<persName>` elements into a CSV file, demonstrating the CSV output. Conclude with a 3-minute conceptual overview of Linked Open Data, showing how a `<placeName>` linked to GeoNames can be visualized on a map, using animated lines connecting the TEI document to external data sources. Include a reflection prompt: "How might linking your TEI project to external LOD resources enhance your research questions?" Provide full captions and downloadable XSLT examples and sample TEI files.

---

## Module 8: Validation, Transformation, and Publication of TEI Editions

## Module Goal
Upon completing this module, learners will be able to validate TEI XML documents against relevant schemas, transform TEI into various output formats using XSLT, publish digital scholarly editions on the web, and understand the principles of long-term preservation for TEI-encoded texts.

---

### Chapter 8.1 — Validating TEI XML: Schemas and Best Practices

#### Learning objectives
*   Understand the difference between well-formedness and validity in XML.
*   Explain the role of DTDs, XML Schema, and Relax NG in XML validation.
*   Validate TEI XML documents against project-specific or TEI Consortium schemas.
*   Interpret common validation error messages and troubleshoot issues in TEI encoding.
*   Articulate the importance of validation for interoperability, data integrity, and long-term preservation.

#### Detailed lesson content
In the realm of digital scholarly editing, creating a TEI XML document is only the first step; ensuring its correctness and adherence to established rules is equally, if not more, crucial. This process is known as **validation**. Before we delve into the specifics of TEI validation, it's vital to distinguish between two fundamental concepts in XML: **well-formedness** and **validity**. An XML document is **well-formed** if it adheres to the basic syntactic rules of XML, such as having a single root element, properly nested tags, correctly quoted attribute values, and matching start and end tags. A well-formed document is syntactically correct, meaning an XML parser can read and understand its structure. However, well-formedness alone doesn't guarantee that the document makes sense in a specific context or conforms to a predefined content model.

This is where **validity** comes in. An XML document is **valid** if it is well-formed *and* conforms to the rules defined in an associated schema. A schema acts like a blueprint or a grammar for your XML, specifying which elements and attributes are allowed, where they can appear, their order, their data types, and their cardinality (how many times they can occur). For TEI, this schema is typically derived from the TEI Guidelines themselves, often customized for a specific project using the One-Document-Does-it-all (ODD) mechanism we explored in Module 6. The primary purpose of validation is to ensure that your encoded text consistently follows the structural and semantic rules you've established, whether those are the general TEI Guidelines or your project's specific customizations. This consistency is paramount for automated processing, data exchange, and long-term preservation. Without validation, a TEI document might contain structural errors that prevent it from being correctly transformed, indexed, or even parsed by other tools or researchers.

Historically, XML schemas evolved from simpler mechanisms. The earliest and most basic form is the **Document Type Definition (DTD)**. DTDs are relatively simple and concise, defining elements, attributes, entities, and notations. They are still widely used, especially for older XML standards, but they have limitations: they are not themselves XML (making them harder to process with XML tools), they lack robust data typing (e.g., specifying that an attribute must contain an integer or a date), and they don't support namespaces well. For example, a DTD might define an element `<person>` and an attribute `id`, but it can't easily enforce that `id` must be unique or follow a specific pattern like "P_001".

To address these limitations, **XML Schema Definition (XSD)** was introduced. XSDs are themselves XML documents, which means they can be processed and validated using standard XML tools. They offer much richer data typing (e.g., `xs:string`, `xs:integer`, `xs:date`, `xs:boolean`), support for namespaces, and more sophisticated content models (e.g., specifying complex types, sequences, choices, and mixed content). For instance, an XSD could define that an `<event>` element must contain a `<date>` and a `<description>`, and that the `<date>` must be in `YYYY-MM-DD` format. While powerful, XSDs can also be verbose and complex to write.

A third, increasingly popular schema language is **Relax NG (REgular LAnguage for XML Next Generation)**. Relax NG aims for simplicity and flexibility, often being more concise than XSD while still offering strong validation capabilities. It supports namespaces, data types (through external libraries like Schematron or W3C XML Schema Datatypes), and is generally considered easier to read and write than XSD for many use cases. The TEI Consortium itself uses Relax NG as its primary schema language for the TEI Guidelines, and ODDs can generate Relax NG, DTD, or XSD schemas. For most TEI projects, you will be validating against a Relax NG or XSD schema generated from your ODD.

Let's consider a practical example of a validation error. Suppose you have defined in your ODD that a `<persName>` element *must* contain a `<forename>` and a `<surname>`. If you then encode a person's name as `<persName>John Doe</persName>` without nesting the forename and surname elements, your document will be well-formed but invalid according to your schema. When you run a validator (such as `xmllint`, Oxygen XML Editor, or a Python script using `lxml`), it will flag this specific instance. The error message might look something like: "Element 'persName': Missing child element(s). Expected is (forename, surname)." Interpreting these messages is a key skill. They often point to the exact line and column number, and describe what was expected versus what was found. Common mistakes include:
*   **Misspellings:** `div` instead of `div1` or `div2`.
*   **Incorrect nesting:** Placing an element where it's not allowed by the schema (e.g., a `<note>` directly inside a `<head>`).
*   **Missing required elements:** Omitting a child element that the schema mandates (as in our `<persName>` example).
*   **Incorrect attribute values:** Using a value for an attribute that isn't in its allowed list (e.g., `@type="chapter"` when only `"book"` or `"article"` are allowed).
*   **Namespace issues:** Forgetting to declare a namespace or using the wrong prefix for elements from a specific namespace.

The process of validation is iterative. You run the validator, fix the errors, and run it again until your document is clean. This rigorous process is not merely bureaucratic; it ensures the integrity of your scholarly data. A valid TEI document is a robust foundation for transformation, analysis, and long-term preservation. It guarantees that your data conforms to a predictable structure, making it easier for others (and your future self) to understand, process, and reuse your work, thereby contributing to the interoperability and sustainability of digital humanities scholarship.

#### Key concepts
*   **Well-formedness:** Adherence to the basic syntactic rules of XML (e.g., matching tags, proper nesting).
*   **Validity:** Adherence to the rules defined in an associated XML schema, in addition to being well-formed.
*   **DTD (Document Type Definition):** An older, non-XML schema language for defining XML document structure; less powerful than XSD or Relax NG.
*   **XML Schema Definition (XSD):** An XML-based schema language offering rich data typing, namespace support, and complex content models.
*   **Relax NG:** A concise and flexible schema language, often preferred for its readability and ease of use, used by the TEI Consortium.
*   **ODD (One-Document-Does-it-all):** A TEI mechanism for customizing the TEI Guidelines and generating project-specific schemas (DTD, XSD, Relax NG).
*   **Validation errors:** Messages from a validator indicating where an XML document deviates from its schema rules.

#### Hands-on activity
**Validation Exercise: Debugging a TEI Document**
You are provided with a short TEI XML excerpt and its corresponding Relax NG schema. Your task is to validate the XML against the schema and identify all validation errors. For each error, explain why it's an error according to the schema and propose a *Provided TEI XML Snippet (`invalid_text.xml`):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<?xml-model href="my_project.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>An Invalid Document</title>
      </titleStmt>
      <publicationStmt>
        <p>Published by Cohortia</p>
      </publicationStmt>
      <sourceDesc>
        <p>Original source unknown.</p>
      </sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <div type="chapter">
        <head>Introduction</head>
        <p>This is a paragraph.</p>
        <note>A simple note.</note>
        <persName>Jane Doe</persName> <!-- ERROR 1 -->
        <date when="1899-02-30">February 30, 1899</date> <!-- ERROR 2 -->
      </div>
      <div type="section"> <!-- ERROR 3 -->
        <p>Another paragraph.</p>
      </div>
    </body>
  </text>
</TEI>
```

**Provided Relax NG Schema Snippet (`my_project.rng` - simplified for this exercise):**
```xml
<grammar xmlns="http://relaxng.org/ns/structure/1.0" datatypeLibrary="http://www.w3.org/2001/XMLSchema-datatypes">
  <include href="tei_all.rng"/> <!-- Assumes TEI P5 base -->

  <define name="div">
    <element name="div">
      <attribute name="type">
        <choice>
          <value>chapter</value>
          <value>part</value>
        </choice>
      </attribute>
      <interleave>
        <optional><ref name="head"/></optional>
        <oneOrMore>
          <choice>
            <ref name="p"/>
            <ref name="note"/>
          </choice>
        </oneOrMore>
      </interleave>
    </element>
  </define>

  <define name="persName">
    <element name="persName">
      <interleave>
        <element name="forename"><text/></element>
        <element name="surname"><text/></element>
      </interleave>
    </element>
  </define>

  <define name="date">
    <element name="date">
      <attribute name="when">
        <data type="date"/>
      </attribute>
      <text/>
    </element>
  </define>

</grammar>
```
*(Note: `tei_all.rng` is a placeholder for the full TEI P5 Relax NG schema, which would be included in a real project. The `define` elements here override or extend specific TEI elements for this project.)*

**Instructions:**
1.  Save the XML and Relax NG snippets as `invalid_text.xml` and `my_project.rng` respectively.
2.  Use an XML editor with validation capabilities (like Oxygen XML Editor, VS Code with XML extensions, or a command-line tool like `xmllint` with `jing`) to validate `invalid_text.xml` against `my_project.rng`.
3.  List each validation error reported.
4.  For each error, explain *why* it's an error based on `my_project.rng`'s rules or general XML well-formedness.
5.  Propose a corrected XML snippet for each error.

#### Assessment idea
1.  **Question:** Consider the following TEI XML snippet and its corresponding schema rule. Identify the validation error, explain why it's invalid, and provide a corrected version.

    **TEI XML Snippet:**
    ```xml
    <TEI xmlns="http://www.tei-c.org/ns/1.0">
      <text>
        <body>
          <div type="chapter">
            <p>This is a paragraph.</p>
            <head>Chapter Title</head> <!-- Problem here -->
          </div>
        </body>
      </text>
    </TEI>
    ```

    **Schema Rule (simplified for `div`):**
    ```xml
    <define name="div">
      <element name="div">
        <attribute name="type">
          <choice>
            <value>chapter</value>
            <value>section</value>
          </choice>
        </attribute>
        <interleave>
          <optional><ref name="head"/></optional>
          <oneOrMore><ref name="p"/></oneOrMore>
        </interleave>
      </element>
    </define>
    ```

    **Model Response:**
    *   **Validation Error:** The `<head>` element appears after the `<p>` element within the `<div>`.
    *   **Explanation:** The schema rule for `div` specifies that the `<head>` element, if present, must appear *before* any `<p>` elements. The `interleave` model allows for flexible ordering but implies a general sequence or allows elements to be intermingled. However, in scholarly conventions, a head typically precedes its content. More strictly, if the schema used `sequence` instead of `interleave` (e.g., `<sequence><optional><ref name="head"/></optional><oneOrMore><ref name="p"/></oneOrMore></sequence>`), the order would be strictly enforced. Even with `interleave`, the common interpretation and best practice for headings is to place them at the beginning of their containing division. If the `interleave` was intended to allow *any* order, then the schema itself might be too permissive for scholarly expectations, but as written, the common interpretation is that `<head>` should precede `<p>`. A more precise schema would use `<sequence>` for strict ordering. Given the common scholarly expectation, placing `<head>` after `<p>` is an error in practice.
    *   **Corrected Version:**
        ```xml
        <TEI xmlns="http://www.tei-c.org/ns/1.0">
          <text>
            <body>
              <div type="chapter">
                <head>Chapter Title</head>
                <p>This is a paragraph.</p>
              </div>
            </body>
          </text>
        </TEI>
        ```

2.  **Question:** Explain the primary advantage of using XML Schema Definition (XSD) or Relax NG over Document Type Definitions (DTDs) for validating complex TEI documents. Provide at least two specific features that highlight this advantage.

    **Model Response:**
    The primary advantage of XSD or Relax NG over DTDs for validating complex TEI documents lies in their significantly enhanced capabilities for defining precise and rich content models, leading to more robust and semantically meaningful validation.

    Two specific features highlighting this advantage are:
    1.  **Richer Data Typing:** XSD and Relax NG (when combined with external datatype libraries like W3C XML Schema Datatypes) allow for granular specification of data types for attribute values and element content (e.g., `xs:date`, `xs:integer`, `xs:boolean`, `xs:anyURI`, or custom regular expressions). DTDs, in contrast, only offer very basic types like `CDATA` (character data) or `ID`/`IDREF`. This means XSD/Relax NG can validate that a `@when` attribute on a `<date>` element actually contains a valid date string (e.g., "1900-01-01") and not arbitrary text, which is crucial for data consistency and automated processing in scholarly editions.
    2.  **Namespace Support:** XSD and Relax NG fully support XML namespaces, allowing elements and attributes from different vocabularies to coexist within a single document without ambiguity. DTDs have very limited or no native support for namespaces, making it difficult to validate documents that integrate elements from multiple standards (e.g., TEI elements alongside elements from SVG or MathML, or even custom project-specific namespaces). This is critical for complex digital humanities projects that often integrate diverse data types and standards.

#### AI generation note
Create a 15-minute video lecture with a split-screen presentation. On the left, show a live instructor explaining the concepts of well-formedness vs. validity, and comparing DTD, XSD, and Relax NG with clear visual diagrams illustrating their structure and capabilities. On the right, display a TEI XML snippet with a deliberate validation error and walk through the process of validating it using `xmllint` or Oxygen XML Editor, showing the error message and how to interpret it. Use color-coded highlights to point out the problematic XML lines and the corresponding schema rules. Conclude with a 3-minute interactive quiz where learners identify validation errors in new snippets. Ensure full captions and a downloadable PDF of the example schema and XML.
---

### Chapter 8.2 — Introduction to XSLT for TEI Transformation

#### Learning objectives
*   Define XSLT and explain its role in transforming XML documents.
*   Understand the fundamental concepts of XSLT stylesheets, templates, and match patterns.
*   Write basic XSLT to transform TEI XML into simple HTML.
*   Utilize `xsl:value-of` and `xsl:apply-templates` to extract and process TEI content.
*   Recognize the importance of XPath in selecting nodes for XSLT transformations.

#### Detailed lesson content
Having meticulously encoded and validated your TEI XML, the next crucial step in publishing a digital scholarly edition is to make that data accessible and readable to a wider audience. Raw XML, while machine-readable and semantically rich, is not designed for human consumption in a web browser or print format. This is where **XSLT (Extensible Stylesheet Language Transformations)** comes into play. XSLT is a powerful, declarative language specifically designed for transforming XML documents into other XML documents, HTML, plain text, or any other format. It acts as a bridge, taking your structured TEI data and rendering it into a presentable form. Think of XSLT as a set of instructions that tells a processor how to convert one tree-like structure (your TEI XML document) into another tree-like structure (e.g., an HTML document).

The core idea behind XSLT is to define a set of **templates**. Each template specifies how a particular element or pattern of elements in the source XML document should be transformed. When an XSLT processor encounters an element in the source XML that matches a template's pattern, it applies the instructions within that template. If no specific template matches an element, a default set of rules (often to copy text content) is applied. This template-driven approach makes XSLT incredibly flexible and modular, allowing you to define specific rendering rules for different parts of your TEI document.

An XSLT stylesheet is itself an XML document, typically with the root element `<xsl:stylesheet>` or `<xsl:transform>`. Within this stylesheet, you define your templates using the `<xsl:template>` element. The key attribute for `<xsl:template>` is `match`, which contains an **XPath expression**. XPath (XML Path Language) is a query language for selecting nodes (elements, attributes, text, etc.) from an XML document. It allows you to navigate the hierarchical structure of your TEI file, much like file paths navigate a file system. For example, `//p` selects all `<p>` elements anywhere in the document, `/TEI/text/body/div/p` selects `<p>` elements that are children of `div` elements, and `@n` selects the `n` attribute of the current element. Understanding XPath is fundamental to writing effective XSLT, as it dictates which parts of your TEI document your templates will act upon.

Let's consider a very simple TEI document and an XSLT to transform it into HTML.

**TEI XML Snippet (`my_text.xml`):**
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <text>
    <body>
      <p>This is a <hi rend="bold">sample</hi> paragraph.</p>
    </body>
  </text>
</TEI>
```

**Basic XSLT Stylesheet (`tei_to_html.xsl`):**
```xml
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:tei="http://www.tei-c.org/ns/1.0"
    exclude-result-prefixes="tei">

  <xsl:output method="html" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Transformed TEI</title>
      </head>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="tei:p">
    <p>
      <xsl:apply-templates/>
    </p>
  </xsl:template>

  <xsl:template match="tei:hi[@rend='bold']">
    <b>
      <xsl:apply-templates/>
    </b>
  </xsl:template>

  <!-- Default rule to copy text nodes and process children for other elements -->
  <xsl:template match="text()|@*">
    <xsl:copy/>
  </xsl:template>
  <xsl:template match="*">
    <xsl:apply-templates/>
  </xsl:template>

</xsl:stylesheet>
```

Let's break down this XSLT:
1.  `<xsl:stylesheet>`: The root element, declaring the XSLT namespace (`xmlns:xsl`) and a prefix for the TEI namespace (`xmlns:tei`). The `exclude-result-prefixes="tei"` tells the processor not to include the `tei` namespace prefix in the output HTML.
2.  `<xsl:output method="html" indent="yes"/>`: This instruction specifies that the output should be HTML and should be nicely indented.
3.  `<xsl:template match="/">`: This is the root template. The `match="/" ` selects the root node of the XML document. Inside this template, we generate the basic HTML structure (`<html>`, `<head>`, `<body>`). The `<xsl:apply-templates/>` instruction is crucial: it tells the XSLT processor to continue processing the children of the current node (in this case, the entire TEI document) by looking for other matching templates. Without it, only the content defined in the root template would be generated.
4.  `<xsl:template match="tei:p">`: This template matches all `<p>` elements from the TEI namespace (`tei:` prefix). When a `<p>` element is found, it generates an HTML `<p>` tag. Again, `<xsl:apply-templates/>` ensures that any content *within* the TEI `<p>` (like the `<hi>` element or plain text) is further processed by other templates.
5.  `<xsl:template match="tei:hi[@rend='bold']">`: This template demonstrates how to select elements based on attributes. It matches `<hi>` elements (from the TEI namespace) that have an `rend` attribute with the value "bold". For these, it generates an HTML `<b>` tag.
6.  The last two templates are often referred to as "identity transform" or "catch-all" templates. `match="text()|@*"` copies text nodes and attributes directly. `match="*"` applies templates to any other element not explicitly matched, ensuring their children are processed. These are important for ensuring that content not specifically targeted by a template is still processed or copied.

When this XSLT is applied to `my_text.xml`, the output HTML would be:
```html
<html>
  <head>
    <title>Transformed TEI</title>
  </head>
  <body>
    <p>This is a <b>sample</b> paragraph.</p>
  </body>
</html>
```
Notice how the TEI `<p>` became an HTML `<p>`, and the TEI `<hi rend="bold">` became an HTML `<b>`. This simple example illustrates the power of XSLT: it allows you to declaratively map the rich, semantic structure of your TEI encoding to the presentational structure of HTML, making your scholarly edition accessible on the web. Common mistakes for beginners often include incorrect XPath expressions (leading to templates not matching or selecting the wrong nodes), forgetting `xsl:apply-templates` (resulting in missing content in the output), or not properly handling XML namespaces. Always remember that XSLT processes the XML document as a tree, and your templates navigate and reconstruct that tree.

#### Key concepts
*   **XSLT (Extensible Stylesheet Language Transformations):** A language for transforming XML documents into other formats (XML, HTML, text).
*   **Stylesheet:** An XML document containing XSLT instructions (templates) that define how to transform a source XML document.
*   **Template:** A rule within an XSLT stylesheet that specifies how to process a particular element or pattern of elements in the source XML.
*   **Match pattern:** An XPath expression used in an `xsl:template` to identify the nodes in the source XML that the template should process.
*   **XPath (XML Path Language):** A query language used by XSLT to select nodes or sets of nodes from an XML document.
*   **`xsl:value-of`:** An XSLT instruction that extracts the string value of a selected node and inserts it into the result tree.
*   **`xsl:apply-templates`:** An XSLT instruction that processes the children of the current node or a specified set of nodes by looking for matching templates.

#### Hands-on activity
**XSLT Transformation Challenge: Basic TEI to HTML**
You are given a TEI XML snippet and asked to write an XSLT stylesheet that transforms it into a simple HTML document.

**Provided TEI XML Snippet (`document.xml`):**
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt>
        <title>A Short Poem</title>
        <author>Anonymous</author>
      </titleStmt>
      <publicationStmt>
        <p>Published for educational purposes.</p>
      </publicationStmt>
      <sourceDesc>
        <p>From an old manuscript.</p>
      </sourceDesc>
    </fileDesc>
  </teiHeader>
  <text>
    <body>
      <div type="poem">
        <head>Ode to a Digital Scholar</head>
        <lg>
          <l>The bytes they flow, the code takes flight,</l>
          <l>Through XML and schema's light.</l>
          <l>A `<hi rend="italic">digital</hi>` text, a scholar's dream,</l>
          <l>Encoded well, a flowing stream.</l>
        </lg>
        <p>This poem reflects on the modern scholarly process.</p>
      </div>
    </body>
  </text>
</TEI>
```

**Instructions:**
1.  Create a new XSLT stylesheet (`poem_to_html.xsl`).
2.  Your stylesheet should:
    *   Set the output method to HTML.
    *   Create a basic HTML structure (`<html>`, `<head>`, `<body>`).
    *   Extract the `<title>` from `teiHeader/fileDesc/titleStmt` and place it in the HTML `<title>` tag.
    *   Transform the `tei:div[@type='poem']` into an HTML `<div>` with a class `poem`.
    *   Transform `tei:head` inside the poem div into an HTML `<h2>`.
    *   Transform `tei:lg` into an HTML `<div>` with a class `stanza`.
    *   Transform each `tei:l` into an HTML `<p>`.
    *   Transform `tei:hi[@rend='italic']` into an HTML `<em>`.
    *   Transform any other `tei:p` elements into HTML `<p>`.
3.  Apply your XSLT to `document.xml` using an XSLT processor (e.g., `xsltproc` on the command line, or built-in functions in Oxygen XML Editor or VS Code).
4.  Review the generated HTML to ensure it matches the requirements.

#### Assessment idea
1.  **Question:** Given the following TEI XML snippet, write an XSLT template that transforms the `<persName>` element into an HTML `<span>` with a class `person-name`, and wraps the content of the `<forename>` and `<surname>` elements in `<b>` tags.

    **TEI XML Snippet:**
    ```xml
    <TEI xmlns="http://www.tei-c.org/ns/1.0">
      <text>
        <body>
          <p>The author was <persName><forename>Mary</forename> <surname>Shelley</surname></persName>.</p>
        </body>
      </text>
    </TEI>
    ```

    **Model Response:**
    ```xml
    <xsl:template match="tei:persName">
      <span class="person-name">
        <xsl:apply-templates select="tei:forename"/>
        <xsl:text> </xsl:text> <!-- Add a space between forename and surname -->
        <xsl:apply-templates select="tei:surname"/>
      </span>
    </xsl:template>

    <xsl:template match="tei:forename">
      <b><xsl:value-of select="."/></b>
    </xsl:template>

    <xsl:template match="tei:surname">
      <b><xsl:value-of select="."/></b>
    </xsl:template>
    ```

2.  **Question:** Explain the purpose of `xsl:apply-templates` in an XSLT stylesheet. What happens if you omit it within a template that matches an element with child nodes?

    **Model Response:**
    The purpose of `xsl:apply-templates` is to instruct the XSLT processor to continue processing the children of the current node (or a specified set of nodes) by finding and applying other matching templates in the stylesheet. It's the mechanism that drives the recursive traversal of the source XML tree.

    If you omit `xsl:apply-templates` within a template that matches an element with child nodes, those child nodes will *not* be processed. The content of those child nodes will effectively be ignored and will not appear in the output. For example, if you have a template for `tei:p` but forget `xsl:apply-templates` inside it, any `<hi>` elements or plain text within that `<p>` will not be transformed or copied into the HTML output, resulting in an incomplete or empty HTML paragraph.

#### AI generation note
Create a 12-minute interactive video tutorial. Start with an animated diagram illustrating how XSLT transforms an XML tree into another tree. Then, switch to a split-screen view: the left side shows a TEI XML document, and the right side shows an XSLT stylesheet being built step-by-step in a code editor. Highlight XPath expressions as they are written and demonstrate their selection power. Show the immediate HTML output after each XSLT addition (e.g., adding a template for `<p>`, then for `<hi>`). Include a 2-minute interactive coding challenge where learners complete a missing XSLT template for a `<note>` element, followed by a model solution reveal. Provide full captions and a downloadable starter XSLT and XML file.
---

### Chapter 8.3 — Advanced XSLT Techniques for Scholarly Editions

#### Learning objectives
*   Implement XSLT variables and parameters for reusable values and configurable transformations.
*   Utilize `xsl:for-each`, `xsl:if`, and `xsl:choose` for iterative and conditional processing of TEI data.
*   Apply XSLT modes to generate different output representations from the same TEI source.
*   Develop XSLT logic to transform complex TEI structures like critical apparatus (`<app>`, `<rdg>`, `<lem>`) or prosopographical lists (`<listPerson>`) into rich HTML.
*   Troubleshoot and optimize XSLT stylesheets for efficiency and clarity.

#### Detailed lesson content
While basic XSLT provides the foundation for transforming TEI into HTML, creating sophisticated digital scholarly editions often requires more advanced techniques to handle the rich and complex structures inherent in TEI encoding. This chapter delves into features that allow for greater control, flexibility, and reusability in your XSLT stylesheets.

One of the most fundamental advanced techniques is the use of **variables and parameters**. An `xsl:variable` allows you to store a value or a node-set that can be reused multiple times within a stylesheet, preventing repetition and making your code cleaner and more maintainable. For example, you might define a variable for the base URL of your images or for a common XPath expression: `<xsl:variable name="imgPath" select="'images/'"/>`. You can then use `$imgPath` throughout your templates. **Parameters** (`xsl:param`) are similar to variables but allow values to be passed *into* the stylesheet from the outside, typically at the time of transformation. This is incredibly useful for creating configurable transformations. Imagine you want to generate an HTML edition, but sometimes you need to include footnotes at the bottom of the page, and other times as pop-up tooltips. You could define a parameter, say `footnoteStyle`, and pass "inline" or "popup" as its value, then use `xsl:if` or `xsl:choose` to apply different rendering logic based on that parameter. This allows a single XSLT stylesheet to produce multiple variations of an edition without modification.

**Conditional processing** is essential for handling variations in your TEI data. The `xsl:if` instruction allows you to execute a block of code only if a specified XPath expression evaluates to true. For instance, you might only display an author's birth date if the `@born` attribute is present on a `<person>` element: `<xsl:if test="@born"><p>Born: <xsl:value-of select="@born"/></p></xsl:if>`. For more complex conditional logic with multiple mutually exclusive conditions, `xsl:choose` (with `xsl:when` and `xsl:otherwise`) is used. This is analogous to `if-else if-else` statements in procedural programming. You might use `xsl:choose` to render a `<note>` element differently based on its `@type` attribute (e.g., `type="critical"` vs. `type="editorial"`).

**Iterative processing** is handled by `xsl:for-each`. This instruction allows you to loop through a selected set of nodes and apply a block of XSLT instructions to each node. This is particularly useful for generating lists, tables, or repeating structures. For example, to generate an HTML list of all `<item>`s within a `tei:list`:
```xml
<xsl:template match="tei:list">
  <ul>
    <xsl:for-each select="tei:item">
      <li><xsl:apply-templates/></li>
    </xsl:for-each>
  </ul>
</xsl:template>
```
This pattern is invaluable for transforming elements like `<listPerson>`, `<listPlace>`, or `<listOrg>` into structured HTML tables or lists, dynamically generating content based on the number of entries in your TEI.

One of the most powerful and often underutilized features of XSLT for scholarly editions is the concept of **modes**. XSLT templates can operate in different "modes," allowing the same source XML element to be processed in multiple distinct ways, producing different output structures or content. This is perfect for generating, for example, a reading text, a critical apparatus, and an index from a *single* TEI source file. You might have a template for `tei:p` that renders it as a simple HTML `<p>` in a "reading-text" mode, but in an "index-mode," it extracts named entities from within the paragraph to build an index. You invoke a specific mode using `<xsl:apply-templates mode="my-mode"/>`.

Let's consider a practical scenario: transforming a TEI critical apparatus. A critical apparatus, encoded with `<app>`, `<lem>`, and `<rdg>`, presents different readings of a text. A common requirement is to display the lemma in the main text and present the variant readings as footnotes or pop-ups.

**TEI Snippet with Critical Apparatus:**
```xml
<p>The text reads: <app><lem>dog</lem><rdg wit="#A">hound</rdg><rdg wit="#B">cur</rdg></app> ran fast.</p>
```

To transform this, you might have a primary template for `tei:app` that just outputs the `tei:lem` in the main flow, and a *separate* template in a different mode (e.g., `footnote-mode`) that extracts all the `tei:rdg` elements and formats them for a footnote:

```xml
<!-- Main text mode -->
<xsl:template match="tei:app">
  <xsl:apply-templates select="tei:lem"/>
  <!-- Here, you might also generate a footnote marker -->
  <sup><xsl:variable name="footnoteId" select="generate-id()"/>
      <a href="#{$footnoteId}">*</a>
  </sup>
  <!-- And then queue up the footnote content for later processing -->
  <xsl:apply-templates select="." mode="footnote-mode"/>
</xsl:template>

<xsl:template match="tei:lem">
  <xsl:apply-templates/>
</xsl:template>

<!-- Footnote mode -->
<xsl:template match="tei:app" mode="footnote-mode">
  <div class="footnote" id="{generate-id()}">
    <xsl:apply-templates select="tei:lem" mode="footnote-content-mode"/>
    <xsl:text> var. </xsl:text>
    <xsl:for-each select="tei:rdg">
      <xsl:apply-templates select="." mode="footnote-content-mode"/>
      <xsl:if test="position() != last()">, </xsl:if>
    </xsl:for-each>
  </div>
</xsl:template>

<xsl:template match="tei:lem|tei:rdg" mode="footnote-content-mode">
  <xsl:apply-templates/>
  <xsl:if test="@wit"> (<xsl:value-of select="@wit"/>)</xsl:if>
</xsl:template>
```
This example shows how `generate-id()` can create unique IDs for linking, how `xsl:variable` can capture that ID, and how `xsl:for-each` iterates through readings. The use of `mode="footnote-mode"` ensures that the `tei:app` element is processed *again* but this time specifically to generate the footnote content, separate from the main text.

Common pitfalls in advanced XSLT include:
*   **Overly complex XPath:** Writing XPath expressions that are too long or specific, making them brittle and hard to maintain. Aim for clarity and robustness.
*   **Infinite recursion:** Templates calling themselves or other templates in a loop without a stop condition, leading to errors.
*   **Performance issues:** Inefficient `xsl:for-each` loops over large node-sets or repeated complex XPath evaluations can slow down transformations. Consider using keys (`xsl:key`) for efficient lookups.
*   **Namespace confusion:** Forgetting to declare or correctly use TEI namespaces (`xmlns:tei="http://www.tei-c.org/ns/1.0"`) in your XSLT.

Mastering these advanced XSLT techniques empowers you to unlock the full potential of your TEI-encoded data, enabling you to create dynamic, feature-rich, and highly customizable digital scholarly editions that cater to diverse reader needs and research questions.

#### Key concepts
*   **`xsl:variable`:** An XSLT instruction used to declare a variable and assign it a value or a node-set for reuse within the stylesheet.
*   **`xsl:param`:** An XSLT instruction similar to `xsl:variable`, but its value can be overridden externally at the time of transformation, allowing for configurable stylesheets.
*   **`xsl:if`:** An XSLT instruction for conditional processing, executing its content only if a specified XPath expression evaluates to true.
*   **`xsl:choose`:** An XSLT instruction for multi-way conditional processing, similar to `if-else if-else` statements, using `xsl:when` for conditions and `xsl:otherwise` for a default case.
*   **`xsl:for-each`:** An XSLT instruction for iterative processing, looping through a selected set of nodes and applying its content to each node.
*   **Modes:** A feature in XSLT that allows the same source XML element to be processed in different ways by different templates, enabling the generation of multiple distinct outputs from a single source.
*   **Critical Apparatus Transformation:** The process of using XSLT to render TEI `<app>`, `<lem>`, and `<rdg>` elements into a readable format, often involving footnotes or pop-ups.

#### Hands-on activity
**Advanced XSLT: Critical Apparatus and Person List Transformation**
You are given a TEI XML document containing both a critical apparatus and a list of persons. Your task is to write an XSLT stylesheet that transforms this TEI into HTML, demonstrating the use of `xsl:for-each`, `xsl:if`, and modes.

**Provided TEI XML Snippet (`complex_doc.xml`):**
```xml
<TEI xmlns="http://www.tei-c.org/ns/1.0">
  <teiHeader>
    <fileDesc>
      <titleStmt><title>Complex Document</title></titleStmt>
      <publicationStmt><p>Cohortia</p></publicationStmt>
      <sourceDesc><p>Sample</p></sourceDesc>
    </fileDesc>
    <profileDesc>
      <listPerson>
        <person xml:id="P001" sex="male" born="1820" died="1890">
          <persName><forename>John</forename> <surname>Smith</surname></persName>
          <note type="biographical">A prominent scholar of the 19th century.</note>
        </person>
        <person xml:id="P002" sex="female" born="1850">
          <persName><forename>Emily</forename> <surname>Jones</surname></persName>
          <note type="editorial">Still living at time of publication.</note>
        </person>
      </listPerson>
    </profileDesc>
  </teiHeader>
  <text>
    <body>
      <p>This is the first sentence. The <app corresp="#P001"><lem>original</lem><rdg wit="#MS1">first</rdg><rdg wit="#MS2">initial</rdg></app> text is important.
      Another sentence mentions <app corresp="#P002"><lem>scholars</lem><rdg wit="#MS1">students</rdg></app>.</p>
    </body>
  </text>
</TEI>
```

**Instructions:**
1.  Create an XSLT stylesheet (`complex_transform.xsl`).
2.  Your stylesheet should:
    *   Generate a basic HTML structure.
    *   In the `<body>`, display the main text paragraphs, transforming `<p>` to HTML `<p>`.
    *   For each `<app>` element:
        *   Display the `<lem>` content in the main text.
        *   Generate a superscript footnote reference (e.g., `<sup>[1]</sup>`) that links to a footnote section at the bottom of the page. Use `generate-id()` for unique IDs.
        *   In a separate `div` at the end of the `<body>` (e.g., `<div class="footnotes">`), list the critical apparatus entries. Each entry should start with the lemma, followed by "var." and then a comma-separated list of readings, including their `wit` attributes in parentheses if present.
    *   Also, in the `<body>` (perhaps before the main text, or in a separate section), create an HTML `<table>` for the `<listPerson>`.
        *   The table should have columns for "Name", "Sex", "Born", "Died", and "Notes".
        *   Use `xsl:for-each` to iterate through `<person>` elements.
        *   Use `xsl:if` to only display "Died" if the `@died` attribute is present.
        *   Display the `<note type="biographical">` content in the "Notes" column, if available.

#### Assessment idea
1.  **Question:** You need to display a list of `<event>` elements, but only those with a `@type` attribute of "major". Additionally, for each major event, you want to display its `<label>` and, if present, its `<date>`. Write an XSLT `xsl:for-each` loop and any necessary conditional statements to achieve this.

    **TEI XML Snippet:**
    ```xml
    <listEvent>
      <event type="minor"><label>Local Fair</label><date>1850-06-15</date></event>
      <event type="major"><label>Coronation</label><date>1838-06-28</date></event>
      <event type="minor"><label>Village Market</label></event>
      <event type="major"><label>Great Fire</label><date>1666-09-02</date></event>
    </listEvent>
    ```

    **Model Response:**
    ```xml
    <xsl:template match="tei:listEvent">
      <h3>Major Events:</h3>
      <ul>
        <xsl:for-each select="tei:event[@type='major']">
          <li>
            <xsl:value-of select="tei:label"/>
            <xsl:if test="tei:date">
              <xsl:text> (</xsl:text>
              <xsl:value-of select="tei:date"/>
              <xsl:text>)</xsl:text>
            </xsl:if>
          </li>
        </xsl:for-each>
      </ul>
    </xsl:template>
    ```

2.  **Question:** Explain the concept of XSLT modes and provide a scenario where using modes would be more advantageous than writing separate XSLT stylesheets for different outputs.

    **Model Response:**
    XSLT modes allow a single XSLT stylesheet to process the same source XML elements in multiple distinct ways, generating different output structures or content based on the active mode. A template can be associated with a specific mode using the `@mode` attribute (e.g., `<xsl:template match="tei:p" mode="reading-text"/>`), and `xsl:apply-templates` can invoke processing in a particular mode (e.g., `<xsl:apply-templates mode="index-generation"/>`).

    A scenario where modes are highly advantageous is in generating a comprehensive digital scholarly edition that requires multiple views or components from the same TEI source. For example, a project might need:
    1.  A **reading text** view (HTML with minimal markup, focusing on readability).
    2.  A **critical apparatus view** (HTML with detailed variant readings, perhaps in footnotes or pop-ups).
    3.  A **named entity index** (HTML list of all persons, places, and organizations with page references).

    Without modes, you would likely need to write three entirely separate XSLT stylesheets, each duplicating much of the basic transformation logic (e.g., transforming `<p>` to `<p>`, `<div>` to `<div>`). This leads to significant code duplication, making maintenance and updates much more cumbersome. If a change is needed in how a basic element like `<hi>` is rendered, you'd have to modify three different files.

    With modes, a single stylesheet can contain templates for `tei:p` in "reading-text" mode, `tei:p` in "critical-apparatus" mode (perhaps extracting specific attributes or children), and `tei:p` in "index-generation" mode (perhaps scanning for `<persName>` or `<placeName>` children). The core logic for navigating the XML tree remains centralized, but the *output* for specific elements can vary dramatically depending on the mode invoked. This promotes code reuse, reduces redundancy, and makes the stylesheet more modular and easier to manage, especially for complex scholarly editions.

#### AI generation note
Design a 14-minute advanced XSLT workshop video. Begin with a quick recap of basic XSLT, then dive into variables, parameters, `xsl:if`/`xsl:choose`, and `xsl:for-each` with clear code examples and visual explanations of their logic. The main segment should focus on using modes to transform the provided critical apparatus and `listPerson` TEI snippet. Show the XSLT code evolving, explaining each addition (e.g., how `generate-id()` works, how to structure templates for different modes). Conclude with a 3-minute interactive coding challenge where learners modify an existing XSLT to add a new conditional display rule (e.g., only show person's notes if `@type='biographical'`). Provide full captions and downloadable starter XSLT and TEI files.
---

### Chapter 8.4 — Generating Web-Friendly Output: HTML and CSS

#### Learning objectives
*   Understand the relationship between XSLT-generated HTML and CSS for web presentation.
*   Apply CSS rules to style common TEI-derived HTML elements effectively.
*   Implement best practices for semantic HTML5 and accessible web design in digital editions.
*   Explain the concept of responsive web design and its importance for digital humanities projects.
*   Integrate front-end frameworks (e.g., Bootstrap) into XSLT-generated HTML for rapid styling.

#### Detailed lesson content
After transforming your rich TEI XML into HTML using XSLT, the next step is to make that HTML visually appealing and user-friendly. This is where **CSS (Cascading Style Sheets)** becomes indispensable. CSS is a stylesheet language used to describe the presentation of a document written in HTML (or XML). It dictates how elements should be rendered on screen, on paper, or in other media – controlling colors, fonts, spacing, layout, and much more. While XSLT provides the structure by mapping TEI elements to semantic HTML tags, CSS provides the aesthetics and layout, separating content from presentation, which is a core principle of modern web development and digital humanities publishing.

The synergy between XSLT-generated HTML and CSS is powerful. Your XSLT stylesheet is responsible for producing clean, semantic HTML5. This means using appropriate HTML tags like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`, `<figure>`, and `<blockquote>` instead of generic `<div>`s everywhere. Semantic HTML improves accessibility, search engine optimization (SEO), and the overall maintainability of your code. For instance, instead of transforming a TEI `<head>` into a generic `<div>`, transforming it into an `<h1>` or `<h2>` (depending on its level) provides inherent semantic meaning that browsers and assistive technologies can understand. Similarly, a TEI `<listPerson>` might be transformed into an HTML `<table>` or `<dl>` (description list), which are semantically appropriate for tabular or definitional data.

Once you have semantic HTML, CSS can target these elements to apply styles. You can link an external CSS file to your HTML output, often by adding a `<link rel="stylesheet" href="styles.css"/>` tag within the `<head>` of your HTML. Within `styles.css`, you define rules using selectors to target specific HTML elements, classes, or IDs. For example, to style all paragraphs derived from TEI `<p>` elements, you might simply write `p { font-family: Georgia, serif; line-height: 1.6; }`. If you want to style specific types of notes, your XSLT might generate `<p class="editorial-note">` or `<div class="critical-apparatus">`, which CSS can then target: `.editorial-note { font-style: italic; color: #555; }`.

**Accessibility** is a paramount concern for any digital scholarly edition. It means ensuring that your website can be used by everyone, regardless of their abilities or disabilities. Semantic HTML is a huge step towards accessibility, but CSS also plays a role. Using sufficient color contrast, providing clear focus indicators for keyboard navigation, and ensuring text is resizable are all CSS-related accessibility considerations. For instance, always test your color choices with contrast checkers to ensure they meet WCAG (Web Content Accessibility Guidelines) standards.

Another critical aspect of modern web design is **responsive web design**. This approach ensures that your digital edition looks good and functions well on a wide range of devices, from large desktop monitors to tablets and small smartphones. Responsive design is primarily achieved through CSS using:
*   **Fluid grids:** Using percentages or `flexbox`/`grid` for layout instead of fixed pixel widths.
*   **Flexible images:** Setting `max-width: 100%; height: auto;` for images so they scale down.
*   **Media queries:** CSS rules that apply styles only when certain conditions are met, such as screen width. For example, `@media (max-width: 768px) { .sidebar { display: none; } }` would hide a sidebar on smaller screens.

Integrating **front-end frameworks** like Bootstrap, Foundation, or Bulma can significantly accelerate the styling process. These frameworks provide pre-built CSS components (e.g., navigation bars, buttons, grids, forms) and often include JavaScript for interactive elements. While they offer a quick start and ensure a consistent, responsive design, they can also add bloat and may require customization to match a unique scholarly aesthetic. When using a framework, your XSLT would generate HTML that includes the framework's specific class names (e.g., `<div class="container">`, `<button class="btn btn-primary">`).

For example, if your TEI `<div type="chapter">` is transformed into an HTML `<section class="chapter">`, you could apply a Bootstrap grid system to it:
```xml
<xsl:template match="tei:div[@type='chapter']">
  <section class="container my-4"> <!-- Bootstrap container with margin -->
    <div class="row">
      <div class="col-lg-8 offset-lg-2"> <!-- Main content column, centered -->
        <xsl:apply-templates/>
      </div>
    </div>
  </section>
</xsl:template>
```
And then link the Bootstrap CSS in your HTML `<head>`:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
```
This approach allows you to leverage robust, pre-tested styling and responsiveness without writing all the CSS from scratch. However, it's crucial to understand the underlying HTML and CSS principles even when using frameworks, to avoid common mistakes like relying too heavily on default styles without customization, or neglecting to optimize for performance (e.g., loading only necessary parts of a framework). The goal is to create a digital edition that is not only functional and accurate but also aesthetically pleasing, accessible, and adaptable to various viewing contexts.

#### Key concepts
*   **CSS (Cascading Style Sheets):** A stylesheet language used to describe the presentation (layout, colors, fonts, etc.) of HTML or XML documents.
*   **Semantic HTML5:** Using HTML tags that convey meaning about the content they contain (e.g., `<header>`, `<nav>`, `<article>`) rather than just for presentation.
*   **Accessibility:** Designing web content so that it can be used by people with disabilities, often guided by WCAG standards.
*   **Responsive Web Design:** An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.
*   **Media Queries:** CSS rules that apply styles conditionally based on device characteristics (e.g., screen width, orientation).
*   **Front-end Frameworks:** Collections of pre-written HTML, CSS, and JavaScript (e.g., Bootstrap, Foundation) that provide ready-to-use components and responsive grid systems for rapid web development.

#### Hands-on activity
**Styling a TEI-Derived HTML Page with CSS**
You have an HTML file generated from a TEI document. Your task is to create a CSS file to style this HTML, focusing on readability, semantic elements, and basic responsiveness.

**Provided HTML Snippet (`edition.html` - simplified):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Digital Edition</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>A Scholarly Text</h1>
        <p class="author">By Jane Doe</p>
    </header>
    <main>
        <section class="chapter">
            <h2>Chapter 1: The Beginning</h2>
            <p>This is the first paragraph of the chapter. It contains some important information.</p>
            <p class="note editorial">An editorial note clarifying a point.</p>
            <p>Another paragraph follows, discussing various <span class="term">key concepts</span>.</p>
        </section>
        <section class="chapter">
            <h2>Chapter 2: Further Thoughts</h2>
            <p>More content here, with a <span class="highlight">highlighted phrase</span>.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Cohortia Digital Editions</p>
    </footer>
</body>
</html>
```

**Instructions:**
1.  Create a new CSS file named `styles.css` in the same directory as `edition.html`.
2.  Add CSS rules to `styles.css` to achieve the following:
    *   Set a global `font-family` (e.g., `serif` or `sans-serif`) and `line-height` for the `body`.
    *   Center the `header` and `footer` text.
    *   Style `h1` and `h2` with distinct font sizes and margins.
    *   Give `p.author` a slightly smaller font size and italic style.
    *   Apply a background color and padding to `section.chapter`.
    *   Style `p.note.editorial` with an italic font, a light grey background, and a small border.
    *   Make `span.term` bold and `span.highlight` a different color (e.g., yellow background).
    *   Implement a basic media query: on screens smaller than 768px, make the `section.chapter` padding smaller and reduce the `h1` font size.
3.  Open `edition.html` in a web browser to see your styles applied.

#### Assessment idea
1.  **Question:** You have an XSLT transformation that converts TEI `<figure>` elements into HTML `<img>` tags. Explain how you would use CSS to ensure these images are responsive (i.e., scale correctly on different screen sizes) and provide the necessary CSS rule.

    **Model Response:**
    To ensure that images generated from TEI `<figure>` elements are responsive, you would primarily use the CSS `max-width` property set to `100%` and `height` set to `auto`.

    **Explanation:**
    *   `max-width: 100%;`: This rule ensures that the image will never exceed the width of its parent container. If the container shrinks, the image will shrink proportionally to fit within it.
    *   `height: auto;`: This rule maintains the image's aspect ratio. As the width changes, the height will adjust automatically to prevent distortion.

    **CSS Rule:**
    Assuming your XSLT transforms `<figure>` to `<img>`:
    ```css
    img {
        max-width: 100%;
        height: auto;
        display: block; /* Optional: removes extra space below image */
    }
    ```
    If you wanted to target only images derived from TEI figures, your XSLT might add a class: `<img class="tei-figure-img" src="...">`, and your CSS would be:
    ```css
    .tei-figure-img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    ```

2.  **Question:** Describe two benefits of using semantic HTML5 tags (e.g., `<header>`, `<main>`, `<article>`) in your XSLT-generated output compared to relying solely on generic `<div>` elements with `id` or `class` attributes.

    **Model Response:**
    Two benefits of using semantic HTML5 tags are:

    1.  **Improved Accessibility:** Semantic tags inherently convey meaning about the structure and purpose of content to assistive technologies (like screen readers). For example, a screen reader can identify content within a `<nav>` tag as navigation links, or content within an `<article>` tag as self-contained content. If all content is in `<div>`s, even with descriptive `class` names, assistive technologies have a harder time interpreting the document's structure, making it less accessible for users with visual impairments or other disabilities. Semantic tags provide a clearer, machine-readable outline of the page.

    2.  **Enhanced Search Engine Optimization (SEO) and Readability for Developers:** Search engines use semantic HTML to better understand the content and context of a webpage, which can positively impact search rankings. For developers and future maintainers, semantic tags make the HTML code much more readable and understandable. Seeing `<header>`, `<main>`, and `<footer>` immediately tells you the general role of those sections, whereas a series of `<div>`s with `class="header-wrapper"`, `class="main-content"`, and `class="footer-section"` requires more cognitive effort to parse and understand the document's layout and purpose. This improves maintainability and collaboration on digital humanities projects.

#### AI generation note
Produce a 10-minute interactive video tutorial. Start by showing the `edition.html` from the activity without any CSS, then gradually introduce CSS rules in a split-screen view (left: HTML, right: CSS code editor). Visually demonstrate the impact of each CSS rule (e.g., changing font, adding background, applying responsive media query). Use a live browser preview to show the immediate effect. Include a segment on common accessibility pitfalls related to CSS (e.g., poor color contrast) and how to avoid them. End with a 2-question interactive quiz on selecting the correct CSS properties for a given styling goal. Provide full captions and downloadable CSS and HTML files.
---

### Chapter 8.5 — Dynamic Web Publication: JavaScript and APIs

#### Learning objectives
*   Explain how JavaScript can enhance interactivity in TEI-based web editions.
*   Implement basic JavaScript to create dynamic features like toggling visibility or simple search.
*   Understand the concept of APIs (Application Programming Interfaces) in the context of digital editions.
*   Integrate external data sources or services using APIs (e.g., IIIF for images, linked open data).
*   Discuss the role of JavaScript libraries and frameworks in building complex interactive features.

#### Detailed lesson content
While static HTML and CSS provide a solid foundation for presenting your TEI-encoded texts, modern digital scholarly editions often demand a higher level of interactivity and dynamic functionality. This is where **JavaScript** steps in. JavaScript is a powerful, client-side scripting language that runs directly in the user's web browser, allowing you to manipulate the HTML and CSS of a webpage in real-time, respond to user actions, and fetch data asynchronously. It transforms a static document into a dynamic application, enabling features that significantly enhance the user experience of a digital edition.

Consider a critical apparatus. Instead of displaying all variant readings in a long footnote section, JavaScript can be used to create pop-up tooltips that appear when a user hovers over a lemma, or to toggle the visibility of different readings directly within the text. For example, if your XSLT generates HTML like this for an apparatus:
```html
<span class="app-marker" data-app-id="app1">original</span>
<div id="app1-content" class="app-tooltip" style="display:none;">
  <p>Lemma: original</p>
  <p>Variants: <span class="rdg">first</span> (MS1), <span class="rdg">initial</span> (MS2)</p>
</div>
```
You could then write JavaScript to control the display:
```javascript
document.querySelectorAll('.app-marker').forEach(marker => {
  marker.addEventListener('click', function() {
    const appId = this.dataset.appId;
    const tooltip = document.getElementById(`${appId}-content`);
    tooltip.style.display = tooltip.style.display === 'none' ? 'block' : 'none';
  });
});
```
This simple script iterates through all elements with the class `app-marker`, adds a click listener, and toggles the `display` style of the corresponding tooltip. This makes the critical apparatus non-intrusive yet easily accessible. Other common JavaScript applications in digital editions include:
*   **Search and filtering:** Allowing users to search for keywords or filter lists of persons, places, or dates.
*   **Interactive maps or timelines:** Visualizing geographical or chronological data extracted from TEI.
*   **Dynamic content loading:** Loading parts of a long text on demand (e.g., chapter by chapter) to improve performance.
*   **User annotations:** Enabling users to add their own notes or highlights (though this often requires server-side components as well).

Beyond manipulating the DOM (Document Object Model) directly, JavaScript's power is greatly extended through the use of **APIs (Application Programming Interfaces)**. An API is a set of rules and protocols that allows different software applications to communicate with each other. In digital humanities, APIs enable your TEI-based edition to interact with external services and data sources. Instead of embedding all content directly, you can fetch it dynamically.

A prime example is the **International Image Interoperability Framework (IIIF)**. IIIF provides a standardized API for delivering high-resolution images and associated metadata from cultural heritage institutions. If your TEI document references images (e.g., using `<graphic url="iiif-manifest-url"/>`), your JavaScript can use a IIIF viewer library (like OpenSeadragon) to display these images dynamically, allowing users to zoom, pan, and compare them without leaving your edition. Your XSLT would transform the TEI `<graphic>` into an HTML `<div>` with a `data-iiif-manifest` attribute, and JavaScript would initialize the viewer:
```html
<div class="iiif-viewer" data-iiif-manifest="https://example.org/iiif/manifest/my-image.json"></div>
```
```javascript
// Assuming a IIIF viewer library like OpenSeadragon is loaded
document.querySelectorAll('.iiif-viewer').forEach(viewerDiv => {
  const manifestUrl = viewerDiv.dataset.iiifManifest;
  OpenSeadragon({
    id: viewerDiv.id, // Ensure unique ID for each viewer
    prefixUrl: "openseadragon/images/",
    tileSources: manifestUrl
  });
});
```
This allows your edition to display images hosted by other institutions, ensuring interoperability and reducing your own hosting burden. Similarly, **Linked Open Data (LOD)** APIs (e.g., from Wikidata, VIAF, GeoNames) can be used to enrich your edition. If your TEI `<persName>` has an `@ref` attribute pointing to a Wikidata QID, JavaScript could fetch additional biographical information from the Wikidata API and display it in a pop-up, adding context without cluttering your core TEI encoding.

For more complex interactive features, developers often turn to **JavaScript libraries and frameworks** such as jQuery (for DOM manipulation and AJAX), React, Vue.js, or Angular (for building single-page applications and managing complex user interfaces). These tools provide abstractions and conventions that streamline development, but they also introduce a steeper learning curve and require careful consideration of project scope and long-term maintenance.

Common mistakes when incorporating JavaScript include:
*   **Over-reliance on client-side processing:** Trying to do too much complex data processing in the browser, which can be slow for large TEI files.
*   **Security vulnerabilities:** Not sanitizing user input if you allow dynamic content, or exposing sensitive API keys.
*   **Performance issues:** Loading too many large JavaScript libraries, or writing inefficient scripts that block the main thread.
*   **Accessibility neglect:** Creating dynamic features that are not keyboard-navigable or compatible with screen readers. Always test interactive elements with accessibility in mind.

By thoughtfully integrating JavaScript and APIs, you can transform your TEI-based digital edition from a static collection of texts into a dynamic, interconnected, and highly engaging scholarly resource.

#### Key concepts
*   **JavaScript:** A client-side scripting language used to create interactive and dynamic effects within web browsers.
*   **DOM (Document Object Model) Manipulation:** The process of using JavaScript to dynamically change the structure, style, and content of an HTML document.
*   **API (Application Programming Interface):** A set of rules and protocols that allows different software applications to communicate and exchange data.
*   **IIIF (International Image Interoperability Framework):** A set of standardized APIs for delivering high-resolution images and associated metadata, widely used in cultural heritage.
*   **Linked Open Data (LOD):** A method of publishing structured data so that it can be interlinked and queried, often accessed via SPARQL endpoints or REST APIs.
*   **JavaScript Libraries/Frameworks:** Collections of pre-written JavaScript code (e.g., jQuery, React, Vue.js) that simplify common tasks and provide structures for building complex web applications.

#### Hands-on activity
**Interactive Critical Apparatus with JavaScript**
You have an HTML document generated from TEI, containing critical apparatus markers and hidden tooltip content. Your task is to write JavaScript to make these tooltips toggle visibility when their corresponding markers are clicked.

**Provided HTML Snippet (`interactive_edition.html`):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Edition</title>
    <style>
        .app-marker {
            cursor: pointer;
            color: blue;
            text-decoration: underline;
        }
        .app-tooltip {
            border: 1px solid #ccc;
            padding: 10px;
            background-color: #f9f9f9;
            margin-top: 5px;
            display: none; /* Initially hidden */
        }
    </style>
</head>
<body>
    <main>
        <p>This is the first sentence. The <span class="app-marker" data-app-id="app1">original</span> text is important.
        Another sentence mentions <span class="app-marker" data-app-id="app2">scholars</span>.</p>
    </main>

    <div id="app1-content" class="app-tooltip">
      <p><strong>Apparatus 1:</strong> <span class="lem">original</span> var. <span class="rdg">first</span> (MS1), <span class="rdg">initial</span> (MS2)</p>
    </div>
    <div id="app2-content" class="app-tooltip">
      <p><strong>Apparatus 2:</strong> <span class="lem">scholars</span> var. <span class="rdg">students</span> (MS1)</p>
    </div>

    <script>
        // Your JavaScript code goes here
    </script>
</body>
</html>
```

**Instructions:**
1.  Open `interactive_edition.html` in a text editor.
2.  Inside the `<script>` tags, write JavaScript code that:
    *   Selects all elements with the class `app-marker`.
    *   For each `app-marker`, adds an event listener for a `click` event.
    *   When an `app-marker` is clicked, it should:
        *   Retrieve the `data-app-id` attribute value from the clicked marker.
        *   Find the corresponding `app-tooltip` element using its `id` (e.g., if `data-app-id` is "app1", the tooltip ID is "app1-content").
        *   Toggle the `display` style property of the `app-tooltip` between `'block'` and `'none'`.
3.  Save the file and open it in a web browser to test the interactivity.

#### Assessment idea
1.  **Question:** You want to display a high-resolution image from a cultural heritage institution in your TEI-based digital edition. This institution provides images via the IIIF Image API. Describe how you would integrate this image into your HTML output using JavaScript and a IIIF viewer library, assuming your XSLT has already generated an HTML `div` with the manifest URL.

    **Model Response:**
    To integrate a IIIF image, assuming the XSLT has generated an HTML `div` like `<div class="iiif-viewer" data-iiif-manifest="[IIIF Manifest URL]"></div>`, the process involves two main steps:

    1.  **Include a IIIF Viewer Library:** First, you need to include a JavaScript IIIF viewer library (e.g., OpenSeadragon, Mirador) in your HTML document, typically by adding a `<script>` tag in the `<head>` or before the closing `</body>` tag, linking to the library's CDN or a local file.
        ```html
        <script src="https://cdn.jsdelivr.net/npm/openseadragon@3.0.0/build/openseadragon/openseadragon.min.js"></script>
        ```
    2.  **Initialize the Viewer with JavaScript:** Next, you write a JavaScript script that runs after the DOM is loaded. This script would:
        *   Select all HTML elements designated as IIIF viewers (e.g., all `div`s with the class `iiif-viewer`).
        *   For each selected `div`, extract the IIIF manifest URL from its `data-iiif-manifest` attribute.
        *   Initialize an instance of the IIIF viewer library (e.g., `OpenSeadragon`) for that `div`, passing the manifest URL as the `tileSources` parameter. It's crucial that each `div` has a unique `id` for the viewer to attach to.

        ```javascript
        document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('.iiif-viewer').forEach((viewerDiv, index) => {
            const manifestUrl = viewerDiv.dataset.iiifManifest;
            // Ensure the div has a unique ID for OpenSeadragon
            viewerDiv.id = viewerDiv.id || `iiif-viewer-${index}`;
            OpenSeadragon({
              id: viewerDiv.id,
              prefixUrl: "path/to/openseadragon/images/", // Path to OpenSeadragon's image assets
              tileSources: manifestUrl
            });
          });
        });
        ```
    This setup allows the digital edition to dynamically load and display high-resolution, zoomable images directly from the IIIF server, providing a rich visual experience without hosting the image files yourself.

2.  **Question:** You are building a digital edition of a historical correspondence. You want to implement a simple search functionality that highlights all occurrences of a user-entered keyword within the main text paragraphs. Describe the high-level JavaScript logic you would use to achieve this.

    **Model Response:**
    The high-level JavaScript logic for a simple keyword search and highlighting would involve these steps:

    1.  **Get User Input:** Create an HTML input field (e.g., `<input type="text" id="searchInput">`) and a search button (e.g., `<button id="searchButton">Search</button>`). Attach an event listener (e.g., `click`) to the search button.
    2.  **Retrieve Target Text:** When the search button is clicked, get the keyword from the input field. Then, select all the HTML elements that contain the main text (e.g., all `<p>` elements within `<main>`).
    3.  **Clear Previous Highlights:** Before applying new highlights, first remove any existing highlights from previous searches to prevent overlapping or stale highlights. This typically involves finding previously highlighted elements (e.g., `<span>` with a specific class) and replacing them with their original text content.
    4.  **Perform Search and Highlight:** For each main text paragraph:
        *   Get its plain text content.
        *   Use a regular expression (with the `g` flag for global search and `i` for case-insensitivity) to find all occurrences of the keyword within the paragraph's text.
        *   Replace each occurrence of the keyword with an HTML `<span>` element that has a specific highlighting class (e.g., `<span class="highlight">keyword</span>`).
        *   Update the `innerHTML` of the paragraph element with the new, highlighted HTML content.
    5.  **Handle No Results:** If no occurrences of the keyword are found after iterating through all paragraphs, provide feedback to the user (e.g., "No results found").

    This approach allows for a dynamic and interactive search experience directly within the browser, enhancing the usability of the digital edition.

#### AI generation note
Create a 13-minute interactive video tutorial focusing on JavaScript for dynamic features. Begin by demonstrating the problem (static critical apparatus). Then, in a split-screen code editor, walk through writing the JavaScript to toggle the critical apparatus tooltips, explaining each line and showing its immediate effect in a live browser preview. Dedicate a segment to explaining APIs and IIIF, showing how an XSLT-generated `div` with a `data-iiif-manifest` attribute is picked up by JavaScript to initialize an OpenSeadragon viewer. Include a 3-minute interactive coding challenge where learners complete a script to highlight a specific word on a button click. Ensure full captions and downloadable starter HTML with JavaScript placeholders.
---

### Chapter 8.6 — Static Site Generators and Digital Edition Frameworks

#### Learning objectives
*   Define static site generators and explain their advantages and disadvantages for digital edition publication.
*   Identify popular static site generators (e.g., Jekyll, Hugo, Eleventy) and their relevance to DH projects.
*   Understand the basic workflow of using a static site generator to publish TEI-derived content.
*   Explore specialized digital edition frameworks built on TEI (e.g., TEI Publisher, Versioning Machine, EVT).
*   Evaluate the suitability of different publication tools based on project requirements and technical expertise.

#### Detailed lesson content
While direct XSLT transformation to HTML provides a foundational method for web publication, managing a complex digital scholarly edition with many pages, dynamic navigation, and consistent styling can quickly become cumbersome. This is where **static site generators (SSGs)** offer a powerful and increasingly popular solution. A static site generator is a tool that takes content (like your TEI XML, markdown files, or other data) and templates, processes them, and outputs a complete set of static HTML, CSS, and JavaScript files. These static files can then be hosted on any web server without needing a backend database or server-side scripting (like PHP or Python for dynamic page generation).

The advantages of using SSGs for digital editions are compelling:
*   **Performance:** Static sites are incredibly fast because there's no server-side processing or database queries on each request. The browser simply fetches pre-built HTML files.
*   **Security:** With no database or server-side code, the attack surface is significantly reduced, making static sites inherently more secure.
*   **Simplicity of Hosting:** Static sites can be hosted virtually anywhere, including inexpensive object storage (like Amazon S3, Google Cloud Storage) or specialized services like Netlify, Vercel, or GitHub Pages, often for free or very low cost.
*   **Version Control:** All content and templates are typically stored in plain text files, making them ideal for version control systems like Git, facilitating collaborative development and long-term preservation of the publication itself.
*   **Scalability:** Static sites handle high traffic loads effortlessly because every request simply serves a file.

However, SSGs also have disadvantages:
*   **No Dynamic Backend:** Features like user authentication, comments, or dynamic content submission require integrating third-party services or a separate API.
*   **Build Process:** Changes to content require rebuilding the entire site, which can take time for very large projects.
*   **Learning Curve:** While simpler than full-stack development, SSGs still require command-line familiarity and understanding of templating languages.

Popular general-purpose SSGs include **Jekyll** (Ruby-based, widely used with GitHub Pages), **Hugo** (Go-based, known for its speed), and **Eleventy (11ty)** (JavaScript-based, highly flexible). For a TEI project, your workflow might involve:
1.  Writing XSLT to transform individual TEI files into HTML snippets.
2.  Using the SSG's templating system (e.g., Liquid for Jekyll, Go Templates for Hugo, Nunjucks for Eleventy) to wrap these HTML snippets within a consistent site layout (header, footer, navigation).
3.  Configuring the SSG to process your TEI files (or their XSLT-transformed outputs) as content, generating individual pages.

For example, with Jekyll, you might have a directory `_tei_pages` containing your XSLT-generated HTML files. A Jekyll layout file (`_layouts/tei_page.html`) would then embed this content:
```html
<!-- _layouts/tei_page.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>{{ page.title }}</title>
    <link rel="stylesheet" href="/assets/css/style.css">
  </head>
  <body>
    <header><h1>{{ page.title }}</h1></header>
    <main>
      {{ content }} <!-- This is where your XSLT-generated HTML goes -->
    </main>
    <footer><p>&copy; {{ site.time | date: "%Y" }}</p></footer>
  </body>
</html>
```
Your XSLT would output just the `<main>` content, and Jekyll would wrap it with the layout, adding navigation and other site-wide elements.

Beyond general-purpose SSGs, there are also specialized **digital edition frameworks** that are built specifically to handle TEI. These frameworks often provide pre-built XSLT stylesheets, user interfaces, and publication pipelines tailored for scholarly texts.
*   **TEI Publisher:** Developed by the TEI Consortium, TEI Publisher is a comprehensive platform for publishing TEI documents. It uses a server-side component (eXist-db, an XML database) to store and query TEI, but it can also generate static web applications. It provides a rich web interface for browsing, searching, and visualizing TEI, and is highly customizable with ODDs and XSLT. It significantly lowers the barrier to entry for complex TEI publications.
*   **Versioning Machine:** An older but influential framework that focused on displaying multiple versions of a text side-by-side, based on TEI P5. While its development has slowed, its concepts have influenced many other tools.
*   **EVT (Edition Visualization Technology):** A web-based framework specifically designed for the creation of digital critical editions of manuscripts. It focuses on displaying images of manuscripts alongside diplomatic and critical transcriptions, and handles complex features like critical apparatus and named entity recognition. It's built on a combination of XML, XSLT, and JavaScript.

Choosing the right tool depends on your project's scale, complexity, and your team's technical expertise. For a simple, single-text edition, direct XSLT to HTML might suffice. For a multi-text, multi-component edition with complex navigation and search, an SSG combined with custom XSLT offers a good balance of flexibility and performance. For highly complex critical editions, manuscript facsimiles, or projects requiring an XML database backend for dynamic querying, specialized frameworks like TEI Publisher or EVT might be the most appropriate choice, as they provide much of the necessary infrastructure out-of-the-box. The key is to select a tool that aligns with your long-term goals for sustainability, maintainability, and user experience.

#### Key concepts
*   **Static Site Generator (SSG):** A tool that generates a full static HTML website from source content and templates, without requiring a server-side backend for runtime processing.
*   **Jekyll:** A popular Ruby-based static site generator, often used with GitHub Pages.
*   **Hugo:** A very fast static site generator written in Go, known for its performance.
*   **Eleventy (11ty):** A flexible JavaScript-based static site generator, gaining popularity for its simplicity and power.
*   **TEI Publisher:** A comprehensive platform for publishing TEI documents, utilizing an XML database (eXist-db) and capable of generating static web applications.
*   **Versioning Machine:** A framework for displaying multiple versions of a text side-by-side.
*   **EVT (Edition Visualization Technology):** A web-based framework for creating digital critical editions of manuscripts, focusing on image-text alignment and critical apparatus.

#### Hands-on activity
**Static Site Generator Integration: Jekyll with TEI-Derived Content**
You have an XSLT stylesheet that transforms a TEI document into a clean HTML `<div>` containing the main text. Your task is to set up a basic Jekyll site and integrate this HTML content into a Jekyll page.

**Provided Files:**
1.  **`my_text.xml` (TEI Source):**
    ```xml
    <TEI xmlns="http://www.tei-c.org/ns/1.0">
      <teiHeader><fileDesc><titleStmt><title>My Jekyll Text</title></titleStmt><publicationStmt><p>Cohortia</p></publicationStmt><sourceDesc><p>Sample</p></sourceDesc></fileDesc></teiHeader>
      <text><body><p>This is a paragraph for the Jekyll site.</p><p>It demonstrates how TEI content can be published.</p></body></text>
    </TEI>
    ```
2.  **`tei_to_content.xsl` (XSLT to generate HTML content snippet):**
    ```xml
    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:tei="http://www.tei-c.org/ns/1.0" exclude-result-prefixes="tei">
      <xsl:output method="html" indent="yes"/>
      <xsl:template match="/">
        <div class="tei-content">
          <xsl:apply-templates select="tei:TEI/tei:text/tei:body/*"/>
        </div>
      </xsl:template>
      <xsl:template match="tei:p">
        <p><xsl:apply-templates/></p>
      </xsl:template>
      <!-- Add other templates as needed for your content -->
    </xsl:stylesheet>
    ```

**Instructions:**
1.  **Set up Jekyll:**
    *   If you don't have Jekyll installed, follow the instructions on the Jekyll website (`gem install jekyll bundler`).
    *   Create a new Jekyll site: `jekyll new my-tei-site`
    *   Navigate into the new directory: `cd my-tei-site`
2.  **Generate HTML Content:**
    *   Place `my_text.xml` and `tei_to_content.xsl` in the root of your `my-tei-site` directory.
    *   Run an XSLT processor to transform `my_text.xml` using `tei_to_content.xsl` and save the output to `_includes/tei_content.html` (you'll need to create the `_includes` directory).
        *   Example command (using `xsltproc`): `xsltproc tei_to_content.xsl my_text.xml > _includes/tei_content.html`
3.  **Create a Jekyll Page:**
    *   Create a new file `tei-page.md` in the root of `my-tei-site`.
    *   Add Jekyll front matter and include your generated HTML:
        ```markdown
        ---
        layout: default
        title: My TEI Edition Page
        ---
        {% include tei_content.html %}
        ```
4.  **Run Jekyll:**
    *   Start the Jekyll server: `bundle exec jekyll serve`
    *   Open your browser to `http://localhost:4000/tei-page.html` (or similar, check the console output) to see your TEI-derived content integrated into the Jekyll site.

#### Assessment idea
1.  **Question:** Explain two distinct advantages of using a static site generator (SSG) like Hugo or Eleventy for publishing a TEI-based digital edition, compared to simply serving raw HTML files generated directly by XSLT.

    **Model Response:**
    Two distinct advantages of using an SSG for publishing a TEI-based digital edition are:

    1.  **Centralized Layout and Navigation Management:** When directly generating HTML with XSLT, each HTML file is typically a complete document. If you have multiple TEI files and want a consistent header, footer, or navigation menu across all pages, you would need to duplicate that HTML structure in every XSLT output or manage it through complex XSLT includes. With an SSG, you define a single layout template (e.g., `default.html` in Jekyll) that includes your header, footer, and navigation. Your TEI-derived content then gets "injected" into this layout. This ensures consistency, simplifies site-wide changes (e.g., updating a navigation link only once), and makes the project much more maintainable.
    2.  **Automated Content Processing and Build Pipeline:** SSGs provide a robust build process. They can automatically discover all your content files (including XSLT-generated HTML snippets), process them through templates, generate clean URLs, create sitemaps, and even optimize assets (like CSS and JavaScript). This automation is invaluable for larger editions, as it streamlines the publication workflow. You can trigger a build on content changes, and the SSG handles the entire site regeneration, which is far more efficient and less error-prone than manually running XSLT for every page and then manually assembling them.

2.  **Question:** You are considering using TEI Publisher for a complex digital critical edition that includes manuscript facsimiles, a critical apparatus, and extensive named entity linking. What specific features of TEI Publisher make it particularly well-suited for this type of project, compared to a general-purpose static site generator?

    **Model Response:**
    TEI Publisher is exceptionally well-suited for complex digital critical editions due to several specialized features that go beyond what a general-purpose static site generator offers:

    1.  **Integrated XML Database (eXist-db) for Dynamic Querying and Faceted Search:** Unlike SSGs that produce static files, TEI Publisher is built on an XML database (eXist-db). This allows for dynamic, real-time querying of the TEI data. For a critical edition, this means users can perform complex searches across the entire corpus, filter by specific criteria (e.g., all occurrences of a word in a particular witness, or all persons born before a certain date), and dynamically generate lists of named entities. An SSG would require pre-building all possible search indexes and filters, or integrating a separate client-side search engine, which is less powerful and harder to maintain for large, dynamic datasets.
    2.  **Built-in TEI-Aware Processing and Visualization Components:** TEI Publisher comes with pre-configured XSLT stylesheets and JavaScript components specifically designed to interpret and visualize complex TEI structures. This includes sophisticated rendering of critical apparatus (e.g., pop-up variants, side-by-side comparisons), image-text linking for manuscript facsimiles (often integrated with IIIF), and interactive displays of named entities. While you could build these features with an SSG, it would require extensive custom XSLT, CSS, and JavaScript development from scratch. TEI Publisher provides much of this "out-of-the-box," significantly reducing development time and leveraging best practices for TEI visualization.

#### AI generation note
Develop a 12-minute video tutorial demonstrating the power of static site generators for TEI publication. Start with a conceptual overview of SSGs, explaining their benefits. Then, transition to a screen recording showing the setup of a basic Jekyll site. Walk through the process of running XSLT to generate an HTML snippet from a TEI file and integrating that snippet into a Jekyll page using `_includes` and front matter. Show the site running locally. Conclude with a brief visual tour of examples of TEI Publisher or EVT interfaces, highlighting their advanced features for critical editions. Include a 2-minute reflection prompt asking learners to consider which publication method suits different project types. Provide full captions and downloadable Jekyll starter files and XSLT.
---

### Chapter 8.7 — Archiving, Preservation, and Long-Term Access

#### Learning objectives
*   Understand the critical challenges of long-term digital preservation for TEI-encoded scholarly editions.
*   Identify key strategies and best practices for archiving TEI XML and associated digital assets.
*   Explain the role of metadata standards (e.g., PREMIS, METS) in digital preservation.
*   Evaluate different repository options for hosting and preserving digital humanities projects.
*   Discuss the importance of persistent identifiers (PIDs) and format obsolescence in long-term access.

#### Detailed lesson content
Creating a sophisticated TEI-based digital scholarly edition is a significant investment of time, expertise, and resources. However, the work is not truly complete until you have addressed the crucial challenge of **long-term digital preservation**. Unlike physical books or manuscripts that can endure for centuries with proper care, digital objects are inherently fragile. They are susceptible to hardware failure, software obsolescence, format degradation, and the rapid pace of technological change. Without a deliberate and well-planned preservation strategy, your meticulously encoded TEI text and its associated digital assets (images, XSLT, CSS, JavaScript) could become unreadable or inaccessible within a decade or even less.

The core challenge of digital preservation is to ensure **long-term access** to digital content. This involves maintaining the ability to retrieve, render, and interpret digital information over extended periods, despite technological shifts. For TEI, this means not only preserving the XML files themselves but also ensuring that the schema (ODD, Relax NG, XSD), transformation stylesheets (XSLT), and any rendering code (HTML, CSS, JavaScript) remain functional and understandable. A TEI file without its schema or transformation logic is like a book without a language key.

One of the most fundamental strategies for archiving TEI XML is to ensure it is **valid and well-formed** (as discussed in Chapter 8.1). A valid TEI document, conforming to an openly documented and stable schema (like TEI P5), is inherently more resilient to obsolescence than proprietary or loosely structured XML. The TEI Consortium's commitment to backward compatibility and open standards is a major asset in this regard. Beyond the XML itself, you must also preserve all **associated digital assets**. This includes:
*   **Schemas:** The ODD file and the generated Relax NG/XSD schema.
*   **Transformation Stylesheets:** All XSLT files used to generate web or print outputs.
*   **Rendering Code:** CSS files, JavaScript files, and any front-end framework dependencies.
*   **Images/Media:** High-resolution source images, audio, or video files (ideally in open, non-proprietary formats like TIFF for images, WAV for audio).
*   **Documentation:** Project documentation, encoding guidelines, and any custom tools used.

**Metadata standards** play a crucial role in digital preservation. Metadata—data about data—provides the context necessary to understand, manage, and preserve digital objects. For preservation purposes, two key standards are often employed:
*   **PREMIS (Preservation Metadata Implementation Strategies):** This is a data dictionary for preservation metadata, providing a robust, internationally recognized standard for recording information about the lifecycle of a digital object. It covers intellectual property rights, provenance (who created it, when, how), authenticity (checksums, digital signatures), technical characteristics (file format, size), and preservation activities (migration, validation). A PREMIS record for a TEI file would document its creation, its validation history, any transformations applied, and its relationship to other files (like images).
*   **METS (Metadata Encoding and Transmission Standard):** METS is an XML schema for encoding descriptive, administrative, and structural metadata regarding objects within a digital library. It can link together different types of metadata (descriptive, administrative, technical, preservation) and describe the hierarchical structure of complex digital objects (e.g., a digital edition comprising multiple TEI files, images, and stylesheets). A METS file could describe how all the components of your TEI edition fit together.

Choosing the right **repository** for your digital edition is another critical decision. Options include:
*   **Institutional Repositories:** Many universities and research institutions host digital repositories (e.g., DSpace, Fedora Commons) that offer preservation services for faculty and researchers. These are often excellent choices for long-term stewardship.
*   **Disciplinary Repositories:** Specialized repositories exist for specific academic fields (e.g., CLARIN for language resources, Zenodo for general research data).
*   **National Libraries/Archives:** Major national institutions are increasingly taking on the role of preserving digital cultural heritage.
*   **Cloud Storage (with caution):** While cloud storage (e.g., Amazon S3, Google Cloud Storage) offers durability, it typically provides infrastructure, not preservation services. You would still be responsible for generating and managing preservation metadata and actively migrating formats.

Regardless of the repository, the use of **Persistent Identifiers (PIDs)** is essential. PIDs, such as **DOIs (Digital Object Identifiers)** or **ARKs (Archival Resource Keys)**, provide a unique, long-lasting reference to a digital object. Unlike URLs, which can break, PIDs are managed by resolution services that ensure they always point to the current location of the resource, even if it moves. Assigning a DOI to your TEI edition ensures that it can be reliably cited and accessed by scholars for decades to come.

Finally, addressing **format obsolescence** is an ongoing task. Digital formats evolve, and older formats can become unreadable by modern software. A robust preservation strategy involves active management, including:
*   **Migration:** Converting digital objects from an older format to a newer, more stable one (e.g., migrating an older XML DTD to TEI P5).
*   **Emulation:** Recreating the original computing environment to run obsolete software that can still read older formats.
*   **Normalization:** Converting all incoming files to a small set of well-understood, stable, and widely supported formats (e.g., converting all image formats to TIFF for archival).

The process of digital preservation is not a one-time task but an ongoing commitment. It requires planning from the outset of a project, adherence to open standards, thorough documentation, and engagement with professional preservation services. By prioritizing preservation, you ensure that your digital scholarly edition remains a valuable and accessible resource for future generations of scholars.

#### Key concepts
*   **Digital Preservation:** The set of activities required to ensure continued access to digital materials for as long as necessary.
*   **Long-term Access:** The ability to retrieve, render, and interpret digital information over extended periods, despite technological changes.
*   **PREMIS (Preservation Metadata Implementation Strategies):** An international data dictionary for recording preservation metadata about digital objects.
*   **METS (Metadata Encoding and Transmission Standard):** An XML schema for encoding descriptive, administrative, and structural metadata for digital library objects.
*   **Institutional Repository:** A digital archive maintained by an academic institution to preserve and disseminate the scholarly output of its faculty and researchers.
*   **Persistent Identifier (PID):** A long-lasting reference to a digital object (e.g., DOI, ARK) that remains stable even if the object's location changes.
*   **DOI (Digital Object Identifier):** A common type of persistent identifier used for scholarly publications and data.
*   **Format Obsolescence:** The process by which digital file formats become outdated and difficult or impossible to access due to technological changes.
*   **Migration:** A preservation strategy involving the conversion of digital objects from an older format to a newer one.

#### Hands-on activity
**Preservation Planning Scenario: Documenting a TEI Edition for Archiving**
Imagine you have just completed a digital edition of a 17th-century play, encoded in TEI P5. You need to prepare it for submission to an institutional repository that requires comprehensive preservation documentation.

**Instructions:**
1.  **Identify Core Assets:** List all the digital files and components that would constitute your "TEI edition" for preservation purposes. Think beyond just the TEI XML.
2.  **Draft Preservation Metadata:** For your main TEI XML file (`play.xml`), draft a short PREMIS-like metadata record. Focus on these elements:
    *   **Object Identifier:** A hypothetical unique ID for the file.
    *   **Object Type:** (e.g., file, intellectual entity)
    *   **Original Name:** `play.xml`
    *   **Format:** `application/xml`
    *   **Format Version:** `1.0`
    *   **Creating Application:** (e.g., Oxygen XML Editor, custom Python script)
    *   **Creation Date:** (hypothetical date)
    *   **Agent (Creator):** Your name/project name
    *   **Event (Validation):** Describe a validation event (e.g., "Validated against ODD-generated Relax NG schema").
    *   **Checksum:** (hypothetical SHA-256 value)
3.  **Choose a Repository Type:** Based on the characteristics of your project (a scholarly edition from an academic institution), which type of repository would you prioritize for long-term preservation, and why?
4.  **Consider Obsolescence:** If your edition included custom JavaScript for interactive features, what specific preservation concern would this raise, and what strategy might you employ?

#### Assessment idea
1.  **Question:** Explain why relying solely on a URL (e.g., `https://myproject.org/edition/text.html`) is insufficient for ensuring long-term access to a digital scholarly edition, and how a Persistent Identifier (PID) like a DOI addresses this limitation.

    **Model Response:**
    Relying solely on a URL for long-term access to a digital scholarly edition is insufficient because URLs are inherently unstable and can easily break or become obsolete. This phenomenon is often referred to as "link rot." URLs can change for many reasons:
    *   The website hosting the edition might reorganize its file structure.
    *   The domain name might expire or be transferred.
    *   The hosting provider might change.
    *   The project might move to a new server or platform.
    When a URL breaks, the digital object becomes inaccessible, effectively lost to future scholars, even if the underlying data still exists.

    A Persistent Identifier (PID), such as a DOI (Digital Object Identifier), addresses this limitation by providing a unique, long-lasting, and actionable reference to a digital object that is designed to be stable over time. Unlike a URL, a DOI is not a location; it's an identifier. It works through a resolution service: when you click on a DOI (e.g., `https://doi.org/10.1234/my.edition`), the resolution service looks up the *current* URL associated with that DOI and redirects you to it. If the digital edition moves to a new URL, the maintainer simply updates the DOI's registration with the new URL, and the DOI itself remains the same. This ensures that the edition can be reliably cited and accessed consistently, regardless of changes in its physical location on the web, thereby safeguarding its long-term discoverability and usability.

2.  **Question:** You are archiving a TEI-encoded manuscript transcription that includes high-resolution JPEG images of the manuscript pages. What are two key preservation concerns related to these images, and what specific actions would you take to mitigate them?

    **Model Response:**
    Two key preservation concerns for high-resolution JPEG images in a TEI-encoded manuscript transcription are:

    1.  **Lossy Compression and Format Obsolescence:** JPEG is a lossy compression format, meaning some image data is permanently discarded during compression, and repeated saving can further degrade quality. Additionally, while JPEG is currently ubiquitous, all digital formats face potential obsolescence.
        *   **Mitigation Action:** For archival purposes, convert the high-resolution JPEG images to a lossless, open, and widely supported archival format like **TIFF (Tagged Image File Format)**. TIFF files preserve all original image data and are considered a robust archival format. While JPEGs can be retained for web delivery, the TIFF versions should be stored in the preservation repository. This ensures that a high-quality, non-proprietary master copy is available for future migrations or re-derivations.

    2.  **Lack of Descriptive and Technical Metadata:** Without proper metadata, future users and systems may not understand the images' content, provenance, or technical characteristics (e.g., resolution, color profile, creation date). This hinders discoverability, authenticity checks, and future preservation actions.
        *   **Mitigation Action:** Create and embed comprehensive metadata for each image. This includes descriptive metadata (e.g., what the image depicts, its relationship to the manuscript), administrative metadata (e.g., copyright, licensing), and technical metadata (e.g., resolution, color depth, compression scheme, checksums). Standards like **EXIF** (for technical camera data), **IPTC** (for descriptive and administrative data), or **XMP** (an extensible framework) can be used to embed this metadata directly into the image files, and preservation metadata standards like **PREMIS** can be used to document the image's lifecycle within the repository.

#### AI generation note
Create a 15-minute documentary-style video lecture on digital preservation for TEI. Start with a compelling narrative about the fragility of digital data. Visually explain the concepts of format obsolescence, PIDs (showing broken URLs vs. working DOIs), and the difference between preservation and backup. Use animated diagrams to illustrate PREMIS and METS metadata structures and their role in understanding digital objects. Show examples of institutional repository interfaces. Conclude with a segment on practical steps for TEI projects, including choosing stable formats and documenting workflows. Include a 2-minute reflection prompt on a project's long-term sustainability. Provide full captions and a downloadable checklist for TEI preservation.
---

### Chapter 8.8 — The Future of TEI and Digital Scholarly Editing

#### Learning objectives
*   Identify emerging trends in digital scholarly editing, including AI/ML applications and semantic web integration.
*   Discuss the evolving role of TEI in a rapidly changing technological landscape.
*   Explore new visualization techniques for TEI-encoded data.
*   Understand the principles of collaborative editing platforms and their impact on scholarly workflows.
*   Reflect on ethical considerations and sustainability challenges in the future of digital humanities and TEI.

#### Detailed lesson content
As we conclude our journey through the Text Encoding Initiative, it's essential to look forward and consider the dynamic future of digital scholarly editing. The field is continuously evolving, driven by advancements in technology and changing scholarly practices. TEI, as a foundational standard, remains remarkably resilient and adaptable, but its application is being reshaped by exciting new trends.

One of the most significant emerging trends is the integration of **Artificial Intelligence (AI) and Machine Learning (ML)** into various stages of digital scholarly editing. While human expertise remains paramount for critical judgment, AI/ML can assist with labor-intensive tasks. For instance, **Optical Character Recognition (OCR)**, often enhanced by deep learning, is becoming increasingly accurate for historical documents, significantly speeding up the initial transcription phase. Beyond OCR, ML models can be trained for:
*   **Named Entity Recognition (NER):** Automatically identifying and tagging `<persName>`, `<placeName>`, `<orgName>`, and `<date>` elements in raw text, which can then be reviewed and refined by human editors. This dramatically accelerates the process of creating rich semantic markup.
*   **Variant Collation:** AI could potentially assist in automatically identifying and grouping textual variants across multiple witnesses, generating a preliminary critical apparatus for human review.
*   **Stylometric Analysis:** ML algorithms can analyze textual features to attribute anonymous works, identify authorial styles, or detect influences, enriching the interpretive possibilities of TEI-encoded texts.
*   **Automated Annotation:** AI could suggest annotations for rhetorical devices, linguistic features, or thematic elements, providing a starting point for deeper human analysis.

Another transformative trend is the deeper integration with the **Semantic Web and Linked Open Data (LOD)**. We've touched upon using APIs for external data, but the future involves making TEI data inherently part of the semantic web. This means not just linking to external resources but also expressing the relationships and meanings within TEI documents in a machine-readable, interoperable way using ontologies and RDF (Resource Description Framework). For example, a `<persName>` might not just link to a Wikidata ID but also explicitly state its relationship to other entities (e.g., "was author of," "was spouse of") using a defined ontology. This allows for complex queries across vast networks of scholarly data, enabling new forms of research and discovery that transcend individual editions.

**New visualization techniques** are also continually emerging, moving beyond static HTML. As TEI data becomes richer and more interconnected, so too do the ways we represent it. This includes:
*   **Interactive Networks:** Visualizing relationships between persons, places, and organizations extracted from TEI as dynamic graphs.
*   **Geospatial Visualizations:** Mapping locations mentioned in texts onto interactive historical maps, showing movements or distributions.
*   **Temporal Visualizations:** Creating interactive timelines that plot events, lifespans, or publication dates.
*   **Textual Analysis Visualizations:** Representing word frequencies, topic models, or sentiment analysis results derived from TEI texts.
These visualizations transform the reading experience, allowing users to explore the data in intuitive and analytical ways.

The rise of **collaborative editing platforms** is also reshaping scholarly workflows. Tools like EVT, TEI Publisher, or even custom platforms built on XML databases are increasingly supporting multi-user environments where scholars can collaboratively transcribe, encode, and annotate texts in real-time or asynchronously. This fosters teamwork, accelerates project completion, and allows for distributed expertise, moving away from the solitary scholar model. The challenge here is managing version control and resolving conflicts in a collaborative XML environment.

Finally, as we embrace these technological advancements, it's crucial to address the **ethical considerations and sustainability challenges** inherent in digital humanities.
*   **Ethical AI:** Ensuring that AI/ML tools are used responsibly, transparently, and without perpetuating biases present in historical data or training sets. The "black box" problem of some AI models requires careful scrutiny when applied to scholarly interpretation.
*   **Data Justice:** Considering who has access to these advanced tools and who benefits from them. Are we inadvertently creating new digital divides?
*   **Sustainability:** Beyond technical preservation, how do we ensure the long-term funding, institutional support, and community engagement necessary to maintain and evolve digital editions? This includes considering the environmental impact of digital infrastructure and computing.
*   **Open Access and Licensing:** Continuing to advocate for open access to TEI-encoded data and using appropriate open licenses (e.g., Creative Commons) to maximize reuse and impact.

The future of TEI and digital scholarly editing is one of exciting possibilities, marked by greater automation, deeper semantic integration, richer visualizations, and more collaborative workflows. However, it is a future that demands critical engagement, ethical awareness, and a sustained commitment to the humanistic values that underpin our work. TEI will continue to serve as the robust, flexible backbone for this evolving landscape, adapting to new technologies while preserving the rigor and richness of scholarly inquiry.

#### Key concepts
*   **AI/Machine Learning (ML) in DH:** The application of artificial intelligence and machine learning techniques (e.g., NER, OCR, stylometry) to digital humanities research and editing tasks.
*   **Named Entity Recognition (NER):** An AI/ML technique for automatically identifying and classifying named entities (persons, places, organizations) in text.
*   **Semantic Web:** An extension of the World Wide Web that enables data to be linked and understood by machines, often using RDF and ontologies.
*   **Linked Open Data (LOD):** A set of best practices for publishing and connecting structured data on the web, making it interoperable and queryable.
*   **Visualization Techniques:** Advanced methods for graphically representing data (e.g., network graphs, interactive maps, timelines) to aid analysis and interpretation.
*   **Collaborative Editing Platforms:** Software environments that enable multiple scholars to work together on transcribing, encoding, and annotating digital texts.
*   **Ethical AI:** The responsible development and application of AI, considering issues like bias, transparency, privacy, and societal impact.
*   **Sustainability (DH):** The long-term viability of digital humanities projects, encompassing technical, financial, and organizational aspects.

#### Hands-on activity
**Future Vision: AI-Assisted TEI Encoding Scenario**
Imagine you are starting a new digital edition project for a large corpus of 18th-century letters. Your institution has access to advanced AI/ML tools.

**Instructions:**
1.  **Identify AI Opportunities:** For which specific TEI encoding tasks (e.g., transcribing, marking up names, dates, places, or identifying rhetorical features) would you consider deploying AI/ML tools to assist your human editors? List at least three distinct tasks.
2.  **Describe AI Workflow:** For one of the tasks you identified, describe a hypothetical workflow where AI assists in the encoding process. For example, how would the AI output be generated, and what would be the role of the human editor in reviewing and refining it?
3.  **Ethical Considerations:** What is one key ethical concern you would need to address when using AI for this task (e.g., bias, data privacy, "black box" problem), and how would you mitigate it?

#### Assessment idea
1.  **Question:** Describe how the integration of Linked Open Data (LOD) and the Semantic Web could enhance the scholarly value and discoverability of a TEI-encoded digital edition of historical documents, beyond simply providing internal links or basic search functionality.

    **Model Response:**
    The integration of Linked Open Data (LOD) and the Semantic Web can profoundly enhance the scholarly value and discoverability of a TEI-encoded digital edition in several ways that go beyond basic linking or search:

    1.  **Enriched Context and Interoperability:** By linking TEI elements (like `<persName>`, `<placeName>`, `<term>`) to external LOD resources (e.g., Wikidata, VIAF, GeoNames) using `xml:id` and `@ref` attributes, the edition becomes part of a vast, interconnected web of knowledge. This allows for automatic retrieval of rich contextual information (biographical details, geographical coordinates, definitions) from authoritative sources, dynamically enriching the user experience without embedding all data locally. More importantly, it makes the TEI data itself interoperable with other scholarly datasets that also use these LOD identifiers, enabling cross-corpus analysis and comparison that would be impossible with isolated editions.
    2.  **Advanced Querying and Data Discovery:** With TEI data expressed semantically (e.g., through RDF triples derived from TEI and linked to ontologies), it becomes possible to perform highly complex and federated queries across multiple digital editions and external knowledge bases. For example, a scholar could query: "Show me all letters in this edition written by a person born in London who also corresponded with someone mentioned in *another* linked digital edition, and whose profession is listed as 'poet' in Wikidata." This moves beyond simple keyword search to intelligent data discovery, allowing researchers to uncover hidden connections and patterns across disparate datasets, fostering new research questions and methodologies in the humanities.

2.  **Question:** Discuss one major ethical consideration that arises when applying AI/Machine Learning tools to the task of automatically annotating historical texts for a TEI edition (e.g., identifying named entities or rhetorical devices). How might this consideration impact the scholarly integrity of the edition, and what steps could be taken to address it?

    **Model Response:**
    One major ethical consideration when applying AI/Machine Learning tools to automatically annotate historical texts for a TEI edition is the **potential for algorithmic bias and the "black box" problem**. AI models are trained on existing data, and if that data reflects historical biases (e.g., underrepresentation of certain groups, biased language), the AI will learn and perpetuate those biases in its annotations. For instance, an NER model trained on predominantly male-authored texts might be less accurate at identifying female historical figures or might implicitly reinforce gender stereotypes in its classifications. The "black box" problem refers to the difficulty in understanding *why* an AI made a particular annotation, making it hard to scrutinize its reasoning.

    **Impact on Scholarly Integrity:** This can significantly impact the scholarly integrity of the edition by:
    *   **Perpetuating and Amplifying Bias:** If AI-generated annotations are accepted without critical human review, they can embed and amplify existing historical biases, leading to an incomplete or distorted representation of the past.
    *   **Eroding Transparency and Accountability:** If the reasoning behind annotations is opaque, it undermines the scholarly principle of transparency and makes it difficult for other researchers to evaluate the edition's methodology or challenge its interpretations.
    *   **Devaluing Human Expertise:** Over-reliance on automated annotation without robust human oversight risks devaluing the nuanced interpretive skills of human editors, who bring critical historical and cultural context to the encoding process.

    **Steps to Address It:**
    1.  **Human-in-the-Loop Validation:** Implement a rigorous "human-in-the-loop" workflow where all AI-generated annotations are thoroughly reviewed, corrected, and validated by expert human editors. The AI should be seen as an assistant, not a replacement for scholarly judgment.
    2.  **Transparency and Documentation:** Document the AI models used, their training data, known biases, and performance metrics. Clearly indicate which annotations were AI-generated and which were human-validated in the edition's metadata or documentation.
    3.  **Bias Detection and Mitigation:** Actively work to detect and mitigate biases in training data and model outputs. This might involve curating more diverse training datasets, using fairness metrics during model evaluation, and developing methods to explain AI decisions (explainable AI - XAI).
    4.  **Critical Engagement:** Foster a critical scholarly discourse around the use of AI in DH, encouraging researchers to interrogate AI outputs and understand their limitations rather than accepting them uncritically.

#### AI generation note
Create a 14-minute forward-looking video lecture. Begin with a dynamic montage of cutting-edge DH projects showcasing AI/ML applications (e.g., AI-assisted OCR, NER visualizations). Then, shift to an animated explanation of the Semantic Web and LOD, illustrating how TEI data connects to external knowledge graphs. Showcase examples of interactive visualizations (network graphs, timelines) built from TEI. Discuss the benefits and challenges of collaborative editing platforms. Conclude with a thoughtful segment on ethical AI in DH and the sustainability of digital editions, using a contemplative tone. Include a 2-minute discussion prompt asking learners to envision a future TEI project utilizing these new technologies. Provide full captions and links to exemplar projects.
---

## Final Capstone Project

The capstone project for the Text Encoding Initiative (TEI) course offers you an opportunity to synthesize and apply the diverse skills you've acquired throughout the modules. You will choose one of three distinct project options, each designed to challenge your understanding of TEI principles, scholarly encoding practices, and the broader implications of digital humanities work. These projects encourage independent research, critical decision-making, and the practical application of XML and TEI P5.

### Project Option 1: Scholarly Edition Prototype

This project challenges you to create a small-scale prototype of a scholarly digital edition for a primary source text. You will select a text with some level of complexity (e.g., textual variants, unique formatting, or requiring specific annotation) and encode it thoroughly using TEI P5 guidelines. This project emphasizes meticulous attention to detail, robust metadata, and the accurate representation of textual features.

*   **Requirements:**
    *   Select a primary source text of approximately 100-200 words (e.g., a short poem with known variants, a historical letter, a brief legal document, or a segment of a diary entry). Provide a clear justification for your text choice, explaining its suitability for TEI encoding.
    *   Encode the chosen text using TEI P5, ensuring it is well-formed and valid against the TEI All schema.
    *   Develop a comprehensive `<teiHeader>` including at least `<fileDesc>`, `<profileDesc>`, and `<encodingDesc>`, with detailed metadata pertinent to your text.
    *   Within the `<body>` of your text, demonstrate the use of at least three distinct TEI elements for scholarly annotation or representation, such as `<app>` for textual variants, `<note>` for critical commentary, `<persName>` for named entities, `<placeName>` for locations, `<date>` for dates, or `<del>`/`<add>` for editorial interventions.
    *   Submit your TEI XML file along with a brief (500-750 words) accompanying essay. This essay should explain your encoding choices, justify the specific TEI elements used, discuss any challenges encountered, and reflect on the scholarly value added by your digital edition.
*   **Stretch Goals:**
    *   Create a custom ODD (One Document Does it All) file that defines or constrains specific elements used in your edition, demonstrating a deeper understanding of TEI customization.
    *   Implement a basic XSLT stylesheet to transform your TEI XML into a simple HTML rendering, showcasing how your encoded text could be presented for web publication.
*   **Evaluation Criteria:**
    *   **Validity and Well-formedness:** The submitted XML must be well-formed and valid against the TEI P5 schema (or your custom ODD, if applicable). (30%)
    *   **Appropriate TEI Element Usage:** Effective and accurate application of TEI elements to represent the chosen text's features and scholarly annotations. (30%)
    *   **Metadata Quality:** Completeness, accuracy, and scholarly rigor of the `<teiHeader>` content. (20%)
    *   **Accompanying Essay:** Clarity, depth of analysis, justification of choices, and critical reflection on the encoding process. (20%)
*   **Estimated Time:** 20-25 hours.

### Project Option 2: Digital Collection Metadata Design

This project focuses on the design and implementation of robust metadata for a small, thematically linked collection of digital texts. You will conceptualize a collection, select appropriate TEI `<teiHeader>` elements to describe its items, and then encode the metadata for each item. This project emphasizes consistency, discoverability, and the principles of archival description within a TEI framework.

*   **Requirements:**
    *   Identify a small, coherent collection of 5-7 related primary source texts (e.g., a series of letters from a specific historical period, a set of newspaper articles on a particular event, a small corpus of related poems, or a group of historical recipes). You do *not* need to encode the full text body for this project, only the metadata.
    *   Design a consistent TEI `<teiHeader>` structure that is appropriate for describing all items within your chosen collection. Focus on elements within `<fileDesc>`, `<profileDesc>`, and `<encodingDesc>`.
    *   For each of the 5-7 items, create a separate TEI XML file containing only the `<teiHeader>` (and a minimal `<text>` element if necessary for validity, e.g., `<body><p/></body>`). Ensure consistent application of your chosen metadata schema across all items.
    *   Write a design document (750-1000 words) that explains your metadata schema, justifies the selection of specific TEI elements, discusses how your design supports discoverability and interoperability for your collection, and identifies potential challenges in scaling this design to a larger corpus.
*   **Stretch Goals:**
    *   Develop a strategy for encoding named entities (persons, places, organizations) within the metadata, perhaps using external identifiers (e.g., VIAF, GeoNames).
    *   Suggest how your collection's metadata could be integrated into a larger digital humanities platform or aggregated with other collections.
*   **Evaluation Criteria:**
    *   **Consistency and Coherence:** Uniformity and logical structure of the metadata schema across all collection items. (30%)
    *   **Metadata Richness and Accuracy:** Depth and correctness of information provided within the `<teiHeader>` elements. (30%)
    *   **Design Document Quality:** Clarity, analytical depth, justification of choices, and demonstration of understanding of metadata principles. (20%)
    *   **Validity and Well-formedness:** All submitted XML files must be well-formed and valid against the TEI P5 schema. (20%)
*   **Estimated Time:** 20-25 hours.

### Project Option 3: TEI Customization and Transformation

This project focuses on the advanced aspects of TEI: customizing the schema to fit specific textual phenomena and then demonstrating a basic transformation of that customized markup. You will identify a domain where standard TEI P5 might be insufficient, create an ODD file to extend or constrain it, and then use XSLT to render your specialized XML.

*   **Requirements:**
    *   Identify a specific textual feature, genre, or domain (e.g., stage directions in dramatic texts, specific features of medieval charters, a particular type of marginalia, or a unique structure in a scientific paper) that requires specialized TEI markup beyond the standard P5 elements.
    *   Create a small sample XML document (approximately 15-30 lines of text) that demonstrates this specialized textual phenomenon and uses your proposed custom TEI markup.
    *   Develop an ODD (One Document Does it All) file that formally defines or constrains the necessary TEI elements to represent your chosen textual phenomenon. This ODD should clearly articulate your customization choices.
    *   Write a short XSLT 1.0 or 2.0 stylesheet (approximately 20-40 lines) that transforms your sample XML document into a simple HTML rendering. This transformation should highlight the specialized markup in a meaningful way (e.g., applying specific CSS classes, generating a specialized list).
    *   Submit your sample XML, ODD file, XSLT stylesheet, and a brief (600-900 words) accompanying essay. The essay should explain the textual problem you are addressing, justify the necessity of your ODD customization over standard P5, describe your ODD design choices, and explain how your XSLT transformation demonstrates the value of your custom markup.
*   **Stretch Goals:**
    *   Implement more complex XSLT transformations, such as generating an index of your specialized terms or creating interactive elements based on your custom markup.
    *   Discuss the implications of your customization for interoperability and long-term preservation.
*   **Evaluation Criteria:**
    *   **Problem Identification and Justification:** Clear articulation of the textual problem and a strong rationale for TEI customization. (25%)
    *   **ODD Design and Validity:** Correctness, clarity, and logical consistency of the ODD file in defining or constraining TEI elements. (25%)
    *   **XSLT Functionality and Clarity:** The XSLT stylesheet must correctly transform the XML into meaningful HTML, demonstrating the value of the custom markup. (25%)
    *   **Accompanying Essay:** Depth of analysis, justification of design choices, and critical reflection on the customization process and its implications. (25%)
*   **Estimated Time:** 20-25 hours.

## Final Examination

This comprehensive examination assesses your understanding of the core concepts, methodologies, and practical applications covered throughout the Text Encoding Initiative (TEI) course. It is designed to evaluate your ability to define key terms, analyze TEI XML structures, apply critical thinking to encoding challenges, and articulate scholarly principles in digital humanities. The exam is divided into three parts: Foundational Concepts, TEI Structure and Application, and Advanced Topics and Critical Thinking.

**Total Points:** 100 points
**Time Limit:** 3 hours (recommended)

---

### Part 1: Foundational Concepts (20 points)

*Instructions: Provide concise and accurate definitions for the following terms. (5 points each)*

1.  **Question:** Define "well-formed XML" and "valid XML" in the context of TEI.
    **Model Response:**
    Well-formed XML refers to an XML document that adheres to the basic syntax rules of XML 1.0, such as having a single root element, properly nested tags, correctly quoted attribute values, and matching start and end tags. It is syntactically correct. Valid XML, on the other hand, is a well-formed XML document that also conforms to the rules specified in an associated schema (like a DTD or XML Schema). For TEI, a valid document would conform to the TEI P5 schema, meaning it uses only elements and attributes defined by that schema in the permitted contexts.

2.  **Question:** What is the primary purpose of the `<teiHeader>` in a TEI document?
    **Model Response:**
    The primary purpose of the `<teiHeader>` is to provide comprehensive metadata about the TEI XML document itself, rather than the content of the text being encoded. It contains information such as the title of the digital edition, details about its creation, publication, revision history, and a description of the source text(s) it represents. This metadata is crucial for discoverability, provenance, scholarly accountability, and long-term preservation of the digital resource.

3.  **Question:** Explain the concept of "standoff markup" and why it might be used in TEI.
    **Model Response:**
    Standoff markup is a technique where annotations or markup are stored externally to the primary text, often in a separate XML document, and then linked to specific points or ranges within the base text. This approach is used to avoid issues of overlapping hierarchies (the "overlap problem") where different markup schemes (e.g., linguistic annotation and structural markup) might conflict. In TEI, standoff markup might be used for complex linguistic annotations, multiple layers of interpretation, or when the base text is read-only, allowing for external commentary without altering the original document.

4.  **Question:** What is an ODD file in the context of TEI, and why is it important for customization?
    **Model Response:**
    An ODD (One Document Does it All) file is a TEI XML document that describes a specific TEI customization. It allows users to define which TEI elements and attributes are permitted, required, or forbidden for a particular project, and to add new elements or attributes. ODDs are crucial for customization because they provide a formal, machine-readable way to create project-specific schemas (like DTDs or Relax NG schemas) from the comprehensive TEI Guidelines, ensuring consistency, validity, and documentation of local encoding practices.

---

### Part 2: TEI Structure and Application (40 points)

*Instructions: Analyze the provided TEI XML snippets and answer the questions. (Varying points per question)*

**Snippet A:**
```xml
<text>
  <body>
    <p>The quick brown <hi rend="italic">fox</hi> jumps over the lazy dog.</p>
    <p>This is a second paragraph.</p>
  </body>
</text>
```

5.  **Question:** Identify two well-formedness errors or potential TEI best practice issues in Snippet A. (8 points)
    **Model Response:**
    1.  **Missing `<teiHeader>`:** While the snippet is well-formed XML, a complete TEI document *must* have a `<teiHeader>` preceding the `<text>` element to provide essential metadata. Without it, the document is not a valid TEI document according to the P5 schema.
    2.  **Lack of `<front>`/`<back>` (Potential):** While not strictly an error, for many scholarly texts, the direct nesting of `<body>` under `<text>` without `<front>` or `<back>` may indicate an incomplete or overly simplified structure. Best practice often suggests including these for completeness, even if empty, to reflect the full structure of a textual work. (Alternatively, one could point out the lack of a root element, but the prompt implies this is a *snippet* from a larger document, so the missing `<?xml version="1.0" encoding="UTF-8"?>` and `<TEI>` root might be assumed.)

**Snippet B:**
```xml
<p>On <date when="1776-07-04">July 4th, 1776</date>, the <orgName>Continental Congress</orgName> adopted the <title>Declaration of Independence</title>.</p>
```

6.  **Question:** Explain the scholarly value of using `<date when="1776-07-04">` instead of just `July 4th, 1776`. What TEI principle does this demonstrate? (8 points)
    **Model Response:**
    Using `<date when="1776-07-04">` adds significant scholarly value by providing a normalized, machine-readable representation of the date in ISO 8601 format. This allows for computational processing, such as sorting, filtering, and analysis of dates across a corpus, regardless of how the date is expressed in the original text (e.g., "the fourth of July," "July 4th," "4/7/76"). This demonstrates the TEI principle of **explicit markup and semantic encoding**, where information is not just presented visually but is also semantically identified and structured for clarity, interoperability, and computational utility.

7.  **Question:** Imagine you are encoding a historical letter where the author frequently uses abbreviations and makes occasional spelling errors. Describe how you would use TEI elements to represent these features while preserving the original text. Provide specific element examples. (12 points)
    **Model Response:**
    To represent abbreviations and spelling errors while preserving the original text, I would use a combination of TEI elements:
    *   **For Abbreviations:** I would use the `<abbr>` element to mark the abbreviated form and the `<expan>` element (nested within or alongside `<abbr>`) to provide the expanded form. For example: `Mr.<expan>Mister</expan>` or `<abbr>etc.</abbr><expan>et cetera</expan>`. This allows for both the original text to be visible and the full form to be accessible for readers or processing.
    *   **For Spelling Errors:** I would use the `<sic>` element to mark the original, incorrect spelling and the `<corr>` element (nested within or alongside `<sic>`) to provide the corrected form. For example: `<sic>recieve</sic><corr>receive</corr>`. This preserves the author's original error for scholarly study (e.g., linguistic analysis, understanding literacy levels) while offering a corrected reading.
    This approach ensures that the original text is faithfully transcribed, but also enriched with scholarly interpretation and normalization for various analytical purposes.

8.  **Question:** You are encoding a play script. How would you distinguish between a character's spoken dialogue and a stage direction using TEI? Provide a brief XML example. (12 points)
    **Model Response:**
    In TEI, spoken dialogue is typically enclosed within a `<sp>` (speech) element, which often contains a `<speaker>` element for the character's name and one or more `<p>` (paragraph) elements for the actual lines. Stage directions, on the other hand, are marked with the `<stage>` element.
    **Example:**
    ```xml
    <sp>
      <speaker>ROMEO</speaker>
      <p>But, soft! what light through yonder window breaks?</p>
    </sp>
    <stage rend="aside">Juliet appears above at a window.</stage>
    <sp>
      <speaker>ROMEO</speaker>
      <p>It is the east, and Juliet is the sun.</p>
    </sp>
    ```
    This clear distinction allows for precise identification of who is speaking and what actions or settings are described, which is crucial for analysis of dramatic structure and performance.

---

### Part 3: Advanced Topics and Critical Thinking (40 points)

*Instructions: Answer the following essay and problem-solving questions. (Varying points per question)*

9.  **Question:** Discuss the ethical considerations involved in digitizing and encoding historical texts, particularly those that may contain sensitive or offensive language. How can TEI encoding practices help address these concerns? (10 points)
    **Model Response:**
    Digitizing and encoding historical texts, especially those with sensitive or offensive language (e.g., racist, sexist, or violent content), involves significant ethical considerations. These include the potential for perpetuating harm, misrepresenting historical context, or making such content too easily discoverable without appropriate contextualization. Ethical concerns also extend to issues of privacy for individuals mentioned in the texts, particularly if they are not public figures.
    TEI encoding practices can help address these concerns in several ways:
    *   **Explicit Markup:** Using elements like `<term type="offensive">` or `<seg ana="#hateSpeech">` allows for explicit identification and categorization of problematic language, making it possible to filter, highlight, or contextualize such terms during display.
    *   **Metadata (`<teiHeader>`):** The `<teiHeader>` can include detailed information about the text's provenance, historical context, and editorial policies regarding sensitive content. This can include warnings for readers, statements about editorial neutrality versus intervention, and links to resources that provide further context or support.
    *   **Annotation and Commentary:** Scholarly notes (`<note>`) can be used to provide critical commentary on offensive passages, explaining their historical context, impact, and the editorial decision-making process.
    *   **Controlled Access/Display:** While not strictly TEI, the explicit markup enabled by TEI can facilitate downstream applications that implement controlled access (e.g., requiring user agreement) or different display modes (e.g., redacting or blurring sensitive terms by default, with an option to reveal).
    By providing granular control over textual features and rich metadata, TEI enables scholars to engage with difficult texts responsibly, ensuring that historical context is preserved while also acknowledging contemporary ethical responsibilities.

10. **Question:** Compare and contrast the use of `<ptr>` and `<ref>` elements in TEI. When would you choose one over the other? (10 points)
    **Model Response:**
    Both `<ptr>` (pointer) and `<ref>` (reference) elements in TEI are used for linking to other resources, but they serve distinct purposes:
    *   **`<ptr>` (Pointer):** The `<ptr>` element is used to create a pointer to a location within the same document or an external resource. It is a "bare" pointer, meaning it does not contain any text content itself; it simply points. It's often used for internal cross-references where the text of the reference is generated by the display system (e.g., "see page 12"). It's primarily a structural linking mechanism.
    *   **`<ref>` (Reference):** The `<ref>` element is used to create a reference to a location within the same document or an external resource, but crucially, it *contains text content* that describes the reference. This text content is typically what a reader would see. For example, `<ref target="http://example.com">Example Website</ref>`. It's used when the reference itself needs to be part of the text flow and visually presented to the user.
    **When to choose:**
    *   Choose **`<ptr>`** when you need a purely structural link, where the target is important for processing but the link text itself is either irrelevant or will be generated by a stylesheet (e.g., for internal navigation, linking to an image without showing its filename, or for creating an index entry).
    *   Choose **`<ref>`** when you want to embed a clickable link directly into the text that readers will see and interact with, and where the text of the link provides context or description (e.g., citing a source, linking to an external website, or cross-referencing a specific section with descriptive text).

11. **Question:** You are tasked with encoding a manuscript where the author has made several interlinear additions (text written between the lines) and marginal notes. Describe a robust TEI strategy for encoding these features, ensuring both the original reading order and the physical layout are recoverable. (10 points)
    **Model Response:**
    Encoding interlinear additions and marginal notes requires a strategy that balances the logical reading order with the physical appearance of the manuscript.
    *   **Interlinear Additions:** For interlinear additions, the `<add>` element is ideal. It allows for the added text to be marked, and the `@place` attribute can specify its physical location (e.g., `place="above"`, `place="below"`, `place="inline"`). To ensure the logical reading order, the `<add>` element should be placed at the point where the editor believes the addition should be read. For example: `The quick <add place="above">brown</add> fox.`
    *   **Marginal Notes:** For marginal notes, the `<note>` element is the most appropriate. The `@place` attribute is crucial here to indicate where the note physically appears on the page (e.g., `place="margin-left"`, `place="margin-right"`, `place="margin-top"`, `place="margin-bottom"`). The `<note>` element can be placed either at the point in the text where the note is referenced or, if it's a general page note, after the paragraph or section it pertains to. To maintain the physical layout, one might also use `<pb>` (page break) and `<lb>` (line break) elements with `@n` attributes to precisely track lineation and pagination.
    To ensure both reading order and physical layout are recoverable, a common strategy is to encode the text primarily in its logical reading order, using `<add>` and `<note>` elements placed contextually. For precise physical layout recovery, especially for complex marginalia that might not align perfectly with a single point in the text, one might also employ **standoff markup** or use the **`@facs` attribute** on elements to link to specific regions of a digital image of the manuscript page. This allows for a dual representation: a clean, readable text and a rich, image-based view that preserves the physical arrangement.

12. **Question:** Consider the implications of encoding a historical document that is incomplete or damaged, with significant lacunae (missing sections). How would you use TEI to represent these gaps, and what are the scholarly implications of your choices? (10 points)
    **Model Response:**
    When encoding an incomplete or damaged historical document with lacunae, TEI provides specific elements to represent these gaps, primarily `<gap>` and `<supplied>`.
    *   **`<gap>`:** This element is used to mark a section of text that is missing from the source due to damage, loss, or illegibility, and which the encoder has chosen *not* to supply. It can have attributes like `@reason` (e.g., `reason="damage"`, `reason="illegible"`) and `@extent` (e.g., `extent="1 line"`, `extent="2 words"`) to describe the nature and size of the gap.
    *   **`<supplied>`:** This element is used when the encoder or editor *supplies* text that is missing from the source but can be reconstructed with reasonable certainty (e.g., from parallel versions, context, or scholarly conjecture). It often includes attributes like `@reason` (e.g., `reason="conjecture"`, `reason="parallel"`) and `@resp` to indicate who supplied the text.
    **Scholarly Implications of Choices:**
    The choice between `<gap>` and `<supplied>` carries significant scholarly implications:
    *   **Transparency and Trust:** Using `<gap>` maintains strict fidelity to the physical source, transparently showing what is *not* present. This builds trust with the user, as they know exactly what is original and what is missing.
    *   **Editorial Intervention:** Using `<supplied>` indicates a degree of editorial intervention and interpretation. The editor is making a scholarly judgment about what the missing text likely was. It's crucial to document the basis for this conjecture (e.g., in the `<teiHeader>` or a `<note>`) and to identify the responsible party (`@resp`).
    *   **Readability vs. Fidelity:** While `<gap>` prioritizes fidelity to the physical state, it can sometimes hinder readability. `<supplied>` can improve readability but introduces an interpretive layer. A good scholarly edition balances these, often using both elements appropriately and documenting the editorial principles.
    *   **Analysis:** The explicit marking of gaps and supplied text allows researchers to analyze the extent of damage, the reliability of reconstructions, and the editorial practices of the digital edition, which are all vital aspects of textual scholarship.

---

## Course Conclusion

Congratulations on completing the Text Encoding Initiative (TEI) course! You have embarked on a transformative journey into the heart of digital humanities, acquiring a sophisticated toolkit for representing, analyzing, and preserving textual heritage in the digital age. This course has moved beyond mere technical instruction, fostering a critical understanding of how encoding choices shape our interpretation of texts and their scholarly value.

You are no longer just a reader of texts; you are now a skilled architect of digital editions. You can confidently navigate the complexities of XML and TEI P5, from crafting precise metadata in the `<teiHeader>` to meticulously encoding the nuanced features of a primary source text within the `<body>`. You understand how to represent textual variants, named entities, and structural elements with scholarly rigor. Crucially, you've learned to think critically about the implications of your encoding decisions, recognizing how they impact discoverability, interoperability, and the very meaning of the text. Your ability to customize TEI schemas using ODD files and perform basic transformations with XSLT empowers you to adapt the standard to unique scholarly needs, making you a versatile and invaluable contributor to any digital humanities project.

### Where to go next: Continuing Your TEI Journey

The world of digital humanities is constantly evolving, and your journey with TEI is just beginning. To deepen your expertise and engage with the broader community, consider these next steps:

1.  **Engage with the TEI Consortium:** The official TEI website (tei-c.org) is your primary resource. Explore the full Guidelines, participate in the mailing lists, and consider attending annual TEI conferences or workshops. This is where the standard is discussed, developed, and applied by leading scholars.
2.  **Explore Advanced XSLT and XQuery:** While this course provided a foundation, mastering XSLT for complex transformations and learning XQuery for querying XML databases will significantly expand your capabilities in processing and presenting TEI data. Consider dedicated courses or online tutorials in these areas.
3.  **Contribute to Digital Scholarly Editions:** Many ongoing digital humanities projects welcome volunteers or offer internships. Look for projects that align with your interests (e.g., early modern literature, historical documents, linguistic corpora) and offer to contribute your TEI encoding skills. This hands-on experience is invaluable.
4.  **Join Digital Humanities Communities:** Connect with local or online digital humanities groups. Platforms like DHCommons, H-Net, or university DH centers often host events, discussions, and job boards. Networking with peers and mentors will open doors to new collaborations and learning opportunities.
5.  **Delve into Computational Text Analysis:** With your TEI-encoded texts, you have structured data ripe for computational analysis. Explore tools and methods for topic modeling, sentiment analysis, network analysis of characters, or stylometry. This bridges your encoding skills with quantitative research methods.

### Learning Paths

Your mastery of TEI opens several exciting professional and academic paths:

*   **Digital Scholarly Editing Specialist:** Work on advanced digital editions, focusing on complex textual phenomena, critical apparatus, and publication workflows.
*   **Digital Archivist / Metadata Specialist:** Design and implement metadata schemas for digital collections, ensuring discoverability and long-term preservation of cultural heritage.
*   **Digital Humanities Project Manager:** Lead and coordinate DH projects, leveraging your understanding of technical standards and scholarly requirements.
*   **Computational Text Analysis Researcher:** Apply your skills in structured text to advanced quantitative and qualitative research questions in literary studies, history, linguistics, and other fields.

We encourage you to continue reading, writing, and critically engaging with digital texts. The skills you've developed are not merely technical; they are foundational to shaping the future of humanities scholarship. Your ability to meticulously represent and critically analyze textual data in a digital environment positions you as a vital contributor to the evolving landscape of knowledge creation and dissemination. We wish you the very best in your continued explorations!

---


> End of Syllabus: Text Encoding Initiative (TEI)
> Course ID: text-encoding-initiative-tei
> Total modules: 8
> Total chapters: 47
> Level: Intermediate
> Subcategory: Digital Humanities (11)
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
