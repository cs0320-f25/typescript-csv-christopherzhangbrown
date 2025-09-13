# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
1. If my csv doesn't parse, it would be great to know what is causing the error
2. It would be nice if the csv parser could also work with other delimiters.
3. I would want my csv parser to keep lines and not cut off data.
4. I would want to make sure that my parser can work on really large files. 
- #### Step 2: Use an LLM to help expand your perspective.
The LLM had some overlap with me regarding error detection and working with other delimiters. The LLM however also suggested some other features that I hadn't thought of such as automatic type inference. The llm also mentioned automatic delimiter detection, however this stepped too much into extensionability instead of fucntionality and in our case it wouldn't make as much sense.
- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 
    1. Clear Error Reporting - Functionality - both
    User Story: 
    “As a user of the application, I am able to receive detailed error message with the exact line and the exact word that may be causing the csv file to not parse so that I can quickly fix the error"
    Acceptance Criteria: 
    Error message includes the exact line of the error
    Error message incldue exact word that causes the error
    Error message includes what the error is and what is causing the error

    2. Different formats of CSV - Extensibility - both
    User Story:
    "As a user of the application, the csv parser can parse even when I'm using a different delimiter than a comma."
    Acceptance Criteria:
    User could override the comma delimiter by specifying which delimiter they are using
    If the user doesn't put a delimiter option, it automatically chooses comma.
    3. Type Inference and Schema Validation - Extensibility - AI
    User Story:
    "As a user of the application, I want to speicfy the expected data types for each column so that I can recieve properly typed objects
    Acceptance Criteria:
    User can specify column types
    Parser converts each column based off the type
    If there is an error, there is a detailed error message explaining whats wrong
    If the user doesn't specify column types, it automatically parses into strings. 

    4. Preserves multiple lines - Functionality - Me
    User Story:
    As a user of the application, I want the parser to correctly preserve my data with line breaks."
    Acceptance Criteria:
    Parser shouldn't automatically remove the new lines
    Parser maintains the data and shouldn't change it. 
    Parser handles "\n" creating a new line when that happens
    Multiline descriptions should still appear as a single field unit. 


    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 
    My initial ideas were focused on very simple usability issues such as better error messages and options to work with delimiters. The LLM suggested more sophistacted applications of my ideas and new ones such as automatic type inference. These resonated with me because they were very practical and it was able to execute my ideas in a better way. However, some things that didn't resonate with me was the automatic detection because it would overcomplicate the parser. 

### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests: I focused on tests with different edge cases such as parsing quotations and commas and making sure it didn't change the data. 
#### How To… To run the tests just use npm test, to run the run-parser use npx ts-node src/run-parser.ts

#### Team members and contributions (include cs logins):

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI): Copilot, used Copilot to create CSV tests, also helped with ideas regarding how to implement the csv parser but I wrote it myself. It also helped me brainstorm what to write and how to write things better but I also wrote all of these things in my own words. 
#### Total estimated time it took to complete project: 4 hours
#### Link to GitHub Repo:  https://github.com/cs0320-f25/typescript-csv-christopherzhangbrown
