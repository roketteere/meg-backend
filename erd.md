Here's a list of entities, attributes, and relationships you can use to draw an ERD (Entity Relationship Diagram) for your application. This list corresponds to the models I've just proposed.

**Entities**

1. User
2. EmergencyContact
3. Journey
4. Rating
5. Experience

**Attributes**

*User*
- User_ID (Primary Key)
- Name
- Number
- Allergies
- PreferredHospital
- EmergencyContacts

*EmergencyContact*
- Contact_ID (Primary Key)
- Name
- Number
- Relationship

*Journey*
- Journey_ID (Primary Key)
- User_ID (Foreign Key, related to User)
- Type
- Details
- StartTime
- EndTime
- Route

*Rating*
- Rating_ID (Primary Key)
- User_ID (Foreign Key, related to User)
- Journey_ID (Foreign Key, related to Journey)
- Rating
- Comments

*Experience*
- Experience_ID (Primary Key)
- User_ID (Foreign Key, related to User)
- Date
- Description

**Relationships**

- A User can have multiple EmergencyContacts.
- A User can have multiple Journeys.
- A User can have multiple Ratings.
- A User can have multiple Experiences.
- A Journey can have one Rating.

Each relationship can be illustrated with lines connecting the relevant entities in your ERD. The cardinality of the relationship (1-to-1, 1-to-many, many-to-many) should be indicated at each end of the line.